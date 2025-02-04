export default function BucketList() {
  return (
    <div className="font-body">
      <h1 className="text-4xl font-heading mb-6">Bucketlist 🔒</h1>

      <p className="mb-6">
        This page is currently locked. Please check back later or contact the site owner for access.
      </p>

      <div className="bg-purple text-background p-6 rounded-lg">
        <h2 className="text-2xl font-heading mb-4">Why is this page locked?</h2>
        <p>
          The Bucketlist contains personal goals and aspirations that I prefer to keep private. While I believe in
          sharing many aspects of my life and work, some things are best kept personal.
        </p>
      </div>
    </div>
  )
}

