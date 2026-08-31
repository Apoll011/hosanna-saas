import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Analytics } from "@vercel/analytics/react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { applyRouteMeta, getRouteMeta } from "@/lib/seo";

function useRouteMetaUpdater() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyRouteMeta(getRouteMeta(pathname));
  }, [pathname]);
}

export function RootComponent() {
  useRouteMetaUpdater();

  return (
    <I18nProvider>
      <Analytics />
      <Outlet />
    </I18nProvider>
  );
}

export function NotFoundComponent() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">{t("errors.notFoundTitle")}</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t("errors.notFoundHeading")}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("errors.notFoundDesc")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("common.backToHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("errors.errorHeading")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("errors.errorDesc")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("common.tryAgain")}
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("common.backToHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
