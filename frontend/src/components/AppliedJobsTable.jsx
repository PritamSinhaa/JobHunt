import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
            <TableCaption>Your Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className='text-right'>Status</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2].map((item,index)=> (
                        <TableRow key={index}>
                            <TableCell>12-05-2026</TableCell>
                            <TableCell>Front-End Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className='text-right'><Badge>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobsTable
