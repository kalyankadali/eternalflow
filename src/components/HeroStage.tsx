import { MockBrowser, MockPhone } from "./MockBrowser";

/** Decorative device stack from comps/home.html — not live client metrics. */
export function HeroStage() {
  return (
    <div className="relative min-h-0 lg:min-h-[420px]" aria-hidden="true">
      <div className="ef-orb absolute -top-10 -right-5 h-[280px] w-[280px]" />
      <div className="ef-orb absolute bottom-5 -left-8 h-[180px] w-[180px] opacity-40" />
      <div className="relative z-[2] max-w-[520px] lg:-rotate-[1.5deg]">
        <MockBrowser url="lakeviewresidences.in">
          <div className="mb-2.5 flex items-center justify-between text-[11px] font-bold">
            <span>Lakeview</span>
            <span className="flex gap-2 font-medium text-ef-muted">
              <span>Residences</span>
              <span>Plans</span>
              <span>Visit</span>
            </span>
          </div>
          <div className="ef-photo relative mb-2.5 h-[118px] overflow-hidden rounded-xl">
            <div className="absolute bottom-2.5 left-3 text-ef-on-accent">
              <strong className="block text-sm tracking-tight">Lakeview Residences</strong>
              <span className="text-[11px] opacity-90">Gachibowli · Site visits open</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="overflow-hidden rounded-[10px] border border-ef-border bg-ef-surface-2">
              <div className="ef-photo h-[46px] rounded-none" />
              <p className="px-2 py-1.5 text-[10px] font-semibold text-ef-ink">3 BHK skyline</p>
            </div>
            <div className="overflow-hidden rounded-[10px] border border-ef-border bg-ef-surface-2">
              <div
                className="h-[46px]"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 30%, var(--ef-accent-muted), var(--ef-wash-3))",
                }}
              />
              <p className="px-2 py-1.5 text-[10px] font-semibold text-ef-ink">Club & deck</p>
            </div>
            <div className="overflow-hidden rounded-[10px] border border-ef-border bg-ef-surface-2">
              <div
                className="h-[46px]"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 80%, var(--ef-accent-soft), var(--ef-wash-1))",
                }}
              />
              <p className="px-2 py-1.5 text-[10px] font-semibold text-ef-ink">Inventory</p>
            </div>
          </div>
        </MockBrowser>
      </div>
      <div className="relative z-[3] mt-[-48px] ml-auto w-[148px] rotate-[5deg] lg:absolute lg:right-[4%] lg:bottom-[-8%] lg:mt-0 lg:w-[168px] lg:rotate-6">
        <MockPhone>
          <div className="min-h-[280px] rounded-[20px] bg-ef-surface-2 p-3">
            <div className="mb-2.5 flex items-center gap-2">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ef-accent-soft bg-ef-accent-muted text-[13px] font-extrabold text-ef-accent-strong">
                AR
              </div>
              <div>
                <h4 className="m-0 text-xs font-semibold">Ananya Rao</h4>
                <div className="text-[10px] text-ef-muted">Hyderabad realtor</div>
              </div>
            </div>
            <div className="ef-photo h-[88px]" />
            <div className="mt-2 rounded-xl border border-ef-border bg-ef-surface p-2.5 text-[11px]">
              WhatsApp enquiries · <strong>captured</strong>
            </div>
            <div className="mt-2.5 rounded-full bg-ef-accent py-2 text-center text-[11px] font-bold text-ef-on-accent">
              Book a site visit
            </div>
          </div>
        </MockPhone>
      </div>
      <div className="absolute bottom-7 left-[18px] z-[4] rounded-full border border-ef-border bg-ef-surface px-3.5 py-2 text-xs font-semibold shadow-[var(--ef-shadow-lg)] max-lg:hidden">
        Site visits · this week <em className="not-italic text-ef-accent-strong">18</em>
      </div>
    </div>
  );
}
