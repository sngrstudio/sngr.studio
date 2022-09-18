import type { FC } from 'react'

const SITE_ID = import.meta.env.SITE_ID

const StatusBadge: FC = () => (
  <a href="https://app.netlify.com/sites/sngrstudio/deploys">
    <img
      src={`https://api.netlify.com/api/v1/badges/${SITE_ID}/deploy-status`}
      alt="Netlify Status"
    />
  </a>
)

export default StatusBadge
