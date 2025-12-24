README: Course Companion Landing Page (Vercel-ready)
Goals
Deployment
Vercel-ready Next.js build (App Router)


Performance targets (aim)
Lighthouse Mobile ≥ 90 for Performance, Accessibility, Best Practices


Avoid heavy deps, keep UI static, use CSS for visuals


SEO
Meta tags, OpenGraph, Twitter cards


sitemap.xml, robots.txt


Analytics
Plausible placeholder hook, disabled by default


Easy to enable later via env flag



Tech Stack Recommendations
Next.js (App Router)


TypeScript


TailwindCSS


next/font/google for Inter


Zero image assets required (SVG icons only)



Page: Single Page with Anchors
Build one page with anchored sections in this exact order:
Sticky Header


Hero


Department Cohesion Strip


What Makes This Different


How It Works


For Faculty


For Publishers


Trust & Security (Trust Center mini)


Modes & Integrity


Pilot Process


FAQ


Final CTA + Footer


Required header anchor links
Header links scroll to:
#how-it-works


#department-cohesion


#faculty


#publishers


#trust


#pilot


#faq


Smooth scrolling + motion preference
Use smooth anchor scroll


Respect prefers-reduced-motion (disable smooth scroll and hover lifts)


Sticky header overlap handling
Apply scroll-margin-top to section headings so anchors do not hide under header



Component Tree
Suggested component breakdown:
app/page.tsx


<PageShell>


<StickyHeader />


<main>


<Hero />


<DepartmentCohesionStrip /> (id department-cohesion)


<WhatMakesThisDifferent />


<HowItWorks /> (id how-it-works)


<ForFaculty /> (id faculty)


<ForPublishers /> (id publishers)


<TrustAndSecurity /> (id trust)


<ModesAndIntegrity />


<PilotProcess /> (id pilot)


<PilotForm />


<FAQ /> (id faq)


<FinalCTA />


<Footer />


<PlausibleHook /> (disabled by default, safe no-op)


Suggested shared UI primitives:
<Section> wrapper (padding, max width)


<Card> glass panel component


<Button> primary and secondary


<Pill> badge component


<MonospaceTag> for ON/OFF labels


<Accordion> (FAQ)



File Structure
Recommended layout:
app/


layout.tsx (global metadata, font, base styles)


page.tsx (single-page assembly)


api/pilot/route.ts (placeholder endpoint)


sitemap.ts (Next metadata route)


robots.ts (Next metadata route)


components/


StickyHeader.tsx


Hero.tsx


DepartmentCohesionStrip.tsx


WhatMakesThisDifferent.tsx


HowItWorks.tsx


ForFaculty.tsx


ForPublishers.tsx


TrustAndSecurity.tsx


ModesAndIntegrity.tsx


PilotProcess.tsx


PilotForm.tsx


FAQ.tsx


FinalCTA.tsx


Footer.tsx


PlausibleHook.tsx


content/


copy.ts (all copy constants, verbatim)


lib/


env.ts (analytics enable flag)


utils.ts (class helpers)


public/


favicon.ico (placeholder)



Visual Design: “Trust Center Minimal”
Background
Near-black “ink” background with subtle gradient (no neon)


Example approach: a base gradient + faint noise via CSS (optional) and very low opacity


Cards (dark glass)
Semi-transparent dark panel


Thin border


Soft shadow


Border radius 16–24px


Subtle hover lift (translateY small + shadow increase)


Accents
Teal/green for safe/on/approved


Cool blue for links/citations


Amber for locked/out-of-scope


No bright glowing effects


Typography
Inter


Body 16–18px with generous line height


Monospace for tiny system labels (scope lock, retention tags)


Imagery policy
No stock photos


Only static product mock panel (HTML/CSS)


Minimal SVG icons



CTAs (Conversion)
Two CTAs throughout the page:
Primary button: Request a Pilot (scrolls to #pilot)


Secondary button/link: View Trust Model (scrolls to #trust)


Ensure all CTA instances behave identically.

Pilot Form: Behavior and Validation
Location
In #pilot section


Fields (exact)
“I am a:” (dropdown) Faculty / Department Admin / Publisher / Other


Name


Institution / Publisher


Work email


Course or Title (optional)


LMS (optional) Canvas / Moodle / Blackboard / D2L / Other


Pilot goal (dropdown) Department coherence / Safer study support / Integrity controls / Title modernization / Other


Message (textarea)


Spam protection
Honeypot hidden field, for example companyWebsite or website


If honeypot is filled:


Return success UI


Do not process payload


Submit behavior
On submit:
POST JSON to /api/pilot


Show inline success state:


Thanks. We’ll respond within 2 business days.


Endpoint placeholder
/api/pilot should:


Validate request shape


Log payload server-side


Return { ok: true }


Email integration later


Accessibility
Visible labels for every field (no placeholder-only forms)


Proper focus rings


Inline error messages with aria-describedby


Button states (loading, disabled)



SEO Implementation
Global metadata
In app/layout.tsx:
title, description


OpenGraph


Twitter card tags


canonical (if domain known; otherwise placeholder)


Sitemap and robots
Implement:
app/sitemap.ts


app/robots.ts


For a single page, sitemap can contain / only.

Analytics: Plausible Placeholder Hook
Requirements
Disabled by default


Easy enable later via env, no code changes required other than toggling flag


Recommended approach
NEXT_PUBLIC_ANALYTICS_ENABLED=false by default


If true:


Load plausible script in <PlausibleHook />


If false:


Render nothing


Do not load analytics when disabled.

Motion and Scrolling Rules
Smooth scrolling
Set scroll-behavior: smooth; on html (or implement via JS)


Disable smooth scrolling when prefers-reduced-motion: reduce


Card hover lift
Use transform: translateY(-2px) or similar


Disable lifts when reduced motion



Product Mock Panel (Hero Visual)
Implement as static HTML/CSS “panel within panel”:
Left: Student Chat (Course-bounded)


Right: Scope & Safety with monospace ON/OFF tags + simple “Leakage risk: Low” meter


No images required.

Acceptance Checklist
Mobile-first responsive layout, premium dark readability


Anchor nav works exactly to required ids


Sticky header does not cover anchor headings


Pilot form validates and submits to /api/pilot


Inline success state displays exact text


Honeypot included and functional


Product mock panel is clean and matches “trust center minimal”


No stock imagery, no hype language


Copy matches exactly as provided


Lighthouse mobile targets aimed for



Content Constants (Paste Exactly)
Create content/copy.ts and store all copy verbatim. Do not “clean up” punctuation, spacing, or curly quotes.
Below is the required copy block to paste as-is:
Sticky Header
Logo text:
 Course Companion
subtext: “Department-governed AI, deployed per course”
Nav: How it works | Department cohesion | For faculty | For publishers | Trust & security | Pilot | FAQ
 Buttons: View Trust Model (secondary) and Request a Pilot (primary)
Small header microline (desktop only):
 “Course-bounded retrieval • Citation-required answers • Configurable retention • Clear data handling”
Hero
 Badge pills (show exactly 4):
 Department-governed
Deployed per course
Citation-required answers
Scope-locked retrieval
Headline:
 AI that keeps a department on the same page. Course by course.
 Subheadline:
 Course Companion is a department-governed AI copilot, deployed per course. It answers using approved course materials, follows department standards, and provides citation-required responses so instruction stays consistent across sections while protecting publisher IP and student data.
 CTAs:
 Primary: Request a Pilot
 Secondary: View Trust Model
 Mini line under CTAs:
 Built for higher education: bounded retrieval, governance controls, and citations you can audit.
 Hero visual: Product mock panel (static, designed)
 Left panel title: “Student Chat (Course-bounded)”
 Right panel title: “Scope & Safety”
 Chat example (student):
 “I’m confused about what counts as a confound in our experiment. Can you explain it using our lecture and reading?”
 Assistant:
 “Here’s the department-aligned definition used in this course: a confound is a variable that changes alongside your independent variable and can explain the observed outcome.
 Check yourself: If the confound changed, would the result change even if your independent variable did not?
 Citations: Lecture 4 slides (slides 9–12); Methods reading (pp. 22–24). Would you like a practice quiz with examples on its usage?”
 Student (out of scope):
 “Can you also pull a definition from another textbook or the web?”
 Assistant (refusal):
 “I can’t use outside sources in Course-bounded mode. I can explain using only the materials approved for this course and show citations for each claim.”
 Right panel labels (with monospace tags):
 COURSE-BOUNDED: ON
CITATION REQUIRED: ON
OUTSIDE SOURCES: OFF
SCOPE LOCK: ON
Leakage risk: Low (simple meter)
Department Cohesion Strip (#department-cohesion)
 Title:
 Departmental cohesion, without forcing everyone into the same teaching style.
 Body:
 Departments want consistency across sections: shared definitions, shared policies, shared learning objectives. Course Companion helps by enforcing department standards while letting each instructor keep their own course structure and materials.
 Bullets:
 Shared standards across sections
Course-level boundaries by design
Inspectable citations for every answer
One-liner (small):
 Make the standard answer the easy answer.
What Makes This Different
 Title:
 Safe by default. Coherent by design.
 Card 1:
 Bounded retrieval
 We retrieve from approved course content only. No default web browsing. No mystery sources.
 Card 2:
 Per-course isolation
 Each course is separate by design. Course A cannot see Course B.
 Card 3:
 Citation-required answers
 When enabled, the assistant must cite course sources so students can verify and instructors can audit alignment.
How It Works (#how-it-works)
 Title:
 How Course Companion works
 Subtitle:
 Powerful responses. Hard boundaries. Clear language and defaults.
 Steps:
 Connect course materials
 Upload syllabus, readings, slides, problem sets, rubrics, and instructor notes.
Define the course boundary
 Content is organized per course with policies for what can be retrieved and how it must be cited.
Apply department standards (optional, recommended)
 Departments can provide shared definitions and policy guidance to keep sections coherent.
Students ask questions in labeled modes
 Study, Practice, Draft Feedback, and optional Exam Mode controls.
Retrieval stays in scope
 Only approved excerpts are retrieved. Out-of-scope requests are refused or redirected.
Answers include citations
 Responses show citations to course materials that support the answer.
Callout box title:
 What Course Companion does not do
 Bullets:
 It does not train foundation models on publisher content or student conversations.
It does not combine a campus into one shared index by default.
It does not answer from outside sources in Course-bounded mode unless explicitly enabled.
It does not require instructors to change how they teach to get safer AI behavior.
For Faculty (#faculty)
 Title:
 For faculty: better learning outcomes, fewer “AI surprises”
 Body:
 Students already use AI. Course Companion makes AI use course-aligned, citation-visible, and governed so you can support learning without guessing what sources the assistant used.
 Bullets/cards:
 Course-aligned answers with citations
Practice mode that teaches (hints, steps, checks; configurable strictness)
Draft Feedback (rubric-aligned guidance; instructor-controlled)
Scope lock & refusals for out-of-course requests
Accessible explanations that clarify and scaffold
Micro line:
 Built to support learning objectives, not bypass them.
For Publishers (#publishers)
 Title:
 For publishers: make each title a protected AI product line
 Body:
 Course Companion treats each textbook or courseware package as an AI companion with enforceable boundaries. That supports safer adoption and cleaner licensing than generic AI tools.
 Bullets/cards:
 Per-title boundaries (scope rules, citation format, analytics)
IP protection by design (no training on publisher content)
Brand control (tone and allowed behaviors)
Pilot-to-scale adoption path (start small, expand program-by-program)
Privacy-safe insight into concept-level struggle areas
Comparison callout:
 Generic campus AI is built for broad usefulness. Course Companion is built for bounded use, title-level governance, and inspectable citations.
Trust & Security (#trust)
 Title:
 Trust & security, in plain English
 Subtitle:
 If we can’t explain it clearly, it’s not ready for a department or a publisher.
 Trust pillars:
 Course isolation: separate stores and retrieval rules per course
Citation-first behavior: answers can be required to cite approved sources
Retention controls: configurable options, including zero-retention modes depending on deployment
Clear data handling: where data lives, encryption, and access controls
Behavior rails: scope lock, refusals, and mode-specific constraints
Plain-English commitments:
 Your content stays your content.
Student data is not used to train general models.
Course-bounded mode uses approved materials only.
Citations make alignment inspectable, not assumed.
Governance rules are explicit and testable.
Trust CTA block:
 Button: Request the Security One-Pager (can just scroll to pilot form for now)
Modes & Integrity
 Title:
 Modes that match academic policy
 Intro:
 Not every interaction should be treated the same. Course Companion supports modes so departments can set clear expectations.
 Cards:
 Study mode: explain concepts and summarize approved materials with citations
Practice mode: hints and scaffolding; configurable strictness
Draft Feedback: rubric-aligned guidance with instructor controls
Exam Mode (optional): restricted behavior aligned with department policy
Policy line:
 Departments decide what is allowed. The system enforces those decisions in the user experience.
Pilot (#pilot)
 Title:
 Pilot one course. Prove safety and outcomes.
 Steps:
 Scope (1 week): choose course(s), decide allowed materials, set modes and success metrics
Configure (2–4 weeks): ingest content, apply boundaries, test citations and refusals
Run (4–8 weeks): launch, collect feedback, iterate
“What we need” bullets:
 Syllabus + approved materials
Any rubrics or policy requirements
LMS preference (optional for pilot)
Include the Pilot form here.
FAQ (#faq)
 Include these Q/A in accordion format:
 Does Course Companion train on publisher content or student chats?
 No. Course Companion is designed so publisher IP and student data are not used to train general-purpose models.
 How is this different from general AI tools?
 Course Companion is course-bounded: it can be configured to retrieve from approved course materials only, require citations, and enforce scope and mode rules.
 What do you mean by department-governed?
 Departments can define shared standards (definitions, policy guidance, learning framing) that apply across courses that opt in.
 Do answers include citations?
 Yes when citation-required is enabled. Citations point to approved course sources used to produce the answer.
 Can students use this to cheat?
 Modes and constraints help reduce misuse. Departments can set stricter behavior for Practice and Draft Feedback and restrict Exam Mode based on policy.
 Does it integrate with Canvas/Moodle/Blackboard/D2L?
 Integration options depend on pilot needs. A pilot can run without full LMS integration if required.
 Where is data stored?
 Deployment options vary. We provide a data handling summary for each pilot including storage location and retention settings.
Final CTA + Footer
 Final CTA title:
 Bring AI into alignment with your department.
 Body:
 Start with a single course or a single title. We’ll share the trust model and a pilot plan before any content is onboarded.
 Buttons:
 Primary: Request a Pilot
 Secondary: View Trust Model
 Footer:
 © Course Companion. Department-governed, course-bounded AI for higher education.
