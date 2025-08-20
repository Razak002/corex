export {};

declare global {
  interface CalendlyAPI {
    initPopupWidget(options: { url: string }): void;
    closePopupWidget?(): void;
  }

  interface Window {
    Calendly: CalendlyAPI;
  }
}
