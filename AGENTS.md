<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site has five routes (/, /services, /membership, /resources, /faq) sharing header/footer via `SiteLayout`; keeps chrome consistent across pages.
- Booking and portal URLs live only in `src/lib/site.ts` (currently example OptiMantra links); scheduler is a placeholder until a real link exists so availability is never fabricated.
- Preserve original clinic media as lovable-assets pointers; never represent generated illustration as the real clinician.
- Videos use `VideoCard` (youtube-nocookie / Vimeo dnt, no id = "coming soon" slot) so the doctor's videos can be dropped in by id.
