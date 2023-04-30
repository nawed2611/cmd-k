import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[70vw] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[40vw] text-lg text-muted-foreground sm:text-xl">
          Exploring research has never been easier
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href="/dashboard"
          className={buttonVariants({ size: "lg" })}
        >
          Cmd + K
        </Link>
      </div>
    </section>
  )
}
