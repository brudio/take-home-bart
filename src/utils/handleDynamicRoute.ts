import { RoutesUrls } from './routes'

export const handleDynamicRoute = (page: RoutesUrls, id: string): string => {
  const pageUrl = page.replace(/(:id|:slug)/, '')
  return `${pageUrl}${id}`
}
