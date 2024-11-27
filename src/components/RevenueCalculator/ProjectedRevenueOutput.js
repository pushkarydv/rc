import React from 'react';

function ProjectedRevenueOutput({ projections }) {
  if (projections.length === 0) return null;

  const highestGrowth = projections.reduce((prev, current) =>
    (prev.revenue < current.revenue) ? current : prev
    , projections[0]);

  return (
    <div>
      <h3>Projected Revenue</h3>
      <ul>
        {projections.map((proj, index) => (
          <li key={index} style={proj === highestGrowth ? { fontWeight: 'bold' } : {}}>
            Year {proj.year}: ${proj.revenue.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectedRevenueOutput;