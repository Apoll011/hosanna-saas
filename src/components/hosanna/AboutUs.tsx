import { PageHeader } from "@/components/hosanna/chrome";
import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import tiagoPhoto from "@/assets/tiago_headshot.webp";
import eberPhoto from "@/assets/eber_headshot.webp";

const signupUrl = import.meta.env.VITE_DASHBOARD_URL + "/new";

function Founder({
  photo,
  name,
  role,
  bio,
  quote,
}: {
  photo: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
}) {
  return (
    <article className="border-t border-foreground pt-6">
      <img src={photo} alt="" width={80} height={80} className="h-20 w-20 rounded-full object-cover" />
      <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{role}</p>
      <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">{bio}</p>
      <blockquote className="mt-5 max-w-[42ch] font-display text-xl leading-snug text-foreground">
        “{quote}”
      </blockquote>
    </article>
  );
}

export function AboutUs() {
  const { t } = useI18n();

  return (
    <div>
      <PageHeader
        title={`${t("about.heroTitleStart")} ${t("about.heroTitleHighlight")}`}
        lede={t("about.heroSubtitle")}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl">
            {t("about.storyTitle")}
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>{t("about.storyP1")}</p>
            <p>{t("about.storyP2")}</p>
            <p>{t("about.storyP3")}</p>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">{t("about.churchLinkLabel")}</p>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl">
            {t("about.founderIntroTitle")}
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Founder
              photo={tiagoPhoto}
              name={t("about.tiagoName")}
              role={t("about.tiagoRole")}
              bio={t("about.tiagoBio")}
              quote={t("about.tiagoQuote")}
            />
            <Founder
              photo={eberPhoto}
              name={t("about.eberName")}
              role={t("about.eberRole")}
              bio={t("about.eberBio")}
              quote={t("about.eberQuote")}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
            {t("about.pullQuote")}
          </p>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl">
            {t("about.ctaTitle")}
          </h2>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
            {t("about.ctaSubtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={signupUrl}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary-dark"
            >
              {t("about.ctaStart")}
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-5 font-semibold text-foreground hover:bg-secondary"
            >
              {t("about.ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
