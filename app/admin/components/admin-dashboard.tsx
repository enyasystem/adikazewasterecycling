"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Eye, Trash2, RefreshCw, LogOut, Mail, Calendar, MessageSquare } from "lucide-react"
import type { ContactSubmission } from "@/lib/db"

interface Stats {
  totalSubmissions: number
  unreadSubmissions: number
  thisMonthSubmissions: number
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [stats, setStats] = useState<Stats>({ totalSubmissions: 0, unreadSubmissions: 0, thisMonthSubmissions: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)
  const router = useRouter()

  const fetchData = async () => {
    try {
      const [submissionsRes, statsRes] = await Promise.all([fetch("/api/admin/submissions"), fetch("/api/admin/stats")])

      if (submissionsRes.ok && statsRes.ok) {
        const submissionsData = await submissionsRes.json()
        const statsData = await statsRes.json()
        setSubmissions(submissionsData)
        setStats(statsData)
      }
    } catch (error) {
      console.error("Failed to fetch data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleMarkAsRead = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/submissions/${id}/read`, {
        method: "POST",
      })

      if (response.ok) {
        setSubmissions((prev) => prev.map((sub) => (sub.id === id ? { ...sub, is_read: true } : sub)))
        setStats((prev) => ({ ...prev, unread: prev.unread - 1 }))
      }
    } catch (error) {
      console.error("Failed to mark as read:", error)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        const deletedSubmission = submissions.find((sub) => sub.id === id)
        setSubmissions((prev) => prev.filter((sub) => sub.id !== id))
        setStats((prev) => ({
          total: prev.total - 1,
          unread: deletedSubmission && !deletedSubmission.is_read ? prev.unread - 1 : prev.unread,
          thisMonth: prev.thisMonth - (isThisMonth(deletedSubmission?.submitted_at) ? 1 : 0),
        }))
      }
    } catch (error) {
      console.error("Failed to delete submission:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin/login")
      router.refresh()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const handleViewSubmission = (submission: ContactSubmission) => {
    setSelectedSubmission(submission)
    if (!submission.is_read) {
      handleMarkAsRead(submission.id)
    }
  }

  const isThisMonth = (dateString?: string) => {
    if (!dateString) return false
    const date = new Date(dateString)
    const now = new Date()
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RefreshCw className="h-8 w-8 animate-spin text-teal-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage contact form submissions</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={fetchData} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSubmissions}</div>
              <p className="text-xs text-muted-foreground">All time submissions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">{stats.unreadSubmissions}</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-600">{stats.thisMonthSubmissions}</div>
              <p className="text-xs text-muted-foreground">New submissions</p>
            </CardContent>
          </Card>
        </div>

        {/* Submissions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Submissions</CardTitle>
            <CardDescription>
              {submissions.length === 0 ? "No submissions yet" : `${submissions.length} total submissions`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No contact form submissions yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.service || "General"}</TableCell>
                        <TableCell>{formatDate(submission.submitted_at)}</TableCell>
                        <TableCell>
                          <Badge variant={submission.is_read ? "secondary" : "default"}>
                            {submission.is_read ? "Read" : "Unread"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => handleViewSubmission(submission)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Contact Submission Details</DialogTitle>
                                  <DialogDescription>
                                    Submitted on {formatDate(submission.submitted_at)}
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedSubmission && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Name</label>
                                        <p className="text-sm">{selectedSubmission.name}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Email</label>
                                        <p className="text-sm">
                                          <a
                                            href={`mailto:${selectedSubmission.email}`}
                                            className="text-teal-600 hover:underline"
                                          >
                                            {selectedSubmission.email}
                                          </a>
                                        </p>
                                      </div>
                                      {selectedSubmission.phone && (
                                        <div>
                                          <label className="text-sm font-medium text-gray-500">Phone</label>
                                          <p className="text-sm">
                                            <a
                                              href={`tel:${selectedSubmission.phone}`}
                                              className="text-teal-600 hover:underline"
                                            >
                                              {selectedSubmission.phone}
                                            </a>
                                          </p>
                                        </div>
                                      )}
                                      {selectedSubmission.service && (
                                        <div>
                                          <label className="text-sm font-medium text-gray-500">Service Interest</label>
                                          <p className="text-sm">{selectedSubmission.service}</p>
                                        </div>
                                      )}
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-500">Message</label>
                                      <div className="mt-1 p-3 bg-gray-50 rounded-md text-sm whitespace-pre-wrap">
                                        {selectedSubmission.message}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Submission</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this submission from {submission.name}? This action
                                    cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDelete(submission.id)}>
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
