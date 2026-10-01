import { PageHeader } from "@/components/hosanna/chrome";
import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { FormEvent } from "react";

const fieldClass =
  "mt-2 w-full min-h-11 rounded-2xl border border-input bg-surface px-4 text-base text-foreground placeholder:text-muted-foreground";

export function ContactForm() {
  const { t } = useI18n();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const church = String(data.get("church") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = [`Nome: ${name}`, `Igreja: ${church}`, `E-mail: ${email}`, "", message].join("\n");
    window.location.href = `mailto:hosanna.songbook@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div>
      <PageHeader
        title={`${t("contact.heroTitle")} ${t("contact.heroTitleHighlight")}`}
        lede={t("contact.heroSubtitle")}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground">
              {t("contact.alwaysReadyTitle")}
            </h2>
            <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-muted-foreground">
              {t("contact.alwaysReadyDesc")}
            </p>
            <h3 className="mt-10 font-semibold text-foreground">{t("contact.emailTitle")}</h3>
            <a
              href="mailto:hosanna.songbook@gmail.com"
              className="mt-1 inline-block text-primary hover:underline"
            >
              hosanna.songbook@gmail.com
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{t("contact.emailResponseTime")}</p>
            <h3 className="mt-8 font-semibold text-foreground">{t("common.activeDevelopment")}</h3>
            <p className="mt-2 max-w-[48ch] leading-relaxed text-muted-foreground">
              {t("common.activeDevDesc")}
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 border-t border-foreground pt-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  {t("contact.nameLabel")}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t("contact.namePlaceholder")}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="church" className="text-sm font-semibold text-foreground">
                  {t("contact.churchLabel")}
                </label>
                <input
                  id="church"
                  name="church"
                  autoComplete="organization"
                  placeholder={t("contact.churchPlaceholder")}
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                {t("contact.emailLabel")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={t("contact.emailPlaceholder")}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                {t("contact.subjectLabel")}
              </label>
              <select id="subject" name="subject" className={fieldClass} defaultValue={t("contact.subjectTechnical")}>
                <option>{t("contact.subjectTechnical")}</option>
                <option>{t("contact.subjectFeature")}</option>
                <option>{t("contact.subjectPricing")}</option>
                <option>{t("contact.subjectPartnership")}</option>
                <option>{t("contact.subjectOther")}</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={t("contact.messagePlaceholder")}
                className={`${fieldClass} min-h-36 py-3`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary-dark"
            >
              {t("contact.sendButton")}
            </button>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("contact.termsConsent")}{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                {t("common.privacyPolicy")}
              </Link>
              .
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
