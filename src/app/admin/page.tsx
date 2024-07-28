import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div>
      test
    </div>
  )
}

type SpotCardProps = {
  title: string
  description: string
  body: string
}

function SpotCard({title, description, body}: SpotCardProps) {
  return (
    <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{body}</p>
        </CardContent>
      </Card>
  )
}
