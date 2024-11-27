import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'


export default function ProjectedRevenueOutput({ projections }) {
  if (projections.length === 0) return null

  const highestGrowth = projections.reduce((prev, current) =>
    (prev.revenue < current.revenue) ? current : prev
    , projections[0])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Year</TableHead>
          <TableHead>Projected Revenue</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projections.map((proj) => (
          <TableRow key={proj.year} className={proj === highestGrowth ? "font-bold" : ""}>
            <TableCell>Year {proj.year}</TableCell>
            <TableCell>${proj.revenue.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

