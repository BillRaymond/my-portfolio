<script lang="ts">
	import type { ContactConfig } from '$lib/content/site';

	type Props = {
		contact: ContactConfig;
	};

	let { contact }: Props = $props();
</script>

<section id="contact" class="section-shell" aria-labelledby="contact-title">
	<div class="contact-grid">
		<div class="section-header">
			<p class="eyebrow">Start a conversation</p>
			<h2 id="contact-title" class="section-title">Bring the real problem. We can figure out the right shape together.</h2>
			<p class="section-copy">
				This form is wired for a static-site-friendly form service. Before launch, replace the
				placeholder endpoint with your real Formspree URL.
			</p>

			<div class="mt-8 space-y-3 text-sm leading-6 text-[var(--text-soft)]">
				<p><strong>Email:</strong> <a class="text-link" href={`mailto:${contact.email}`}>{contact.email}</a></p>
				<p><strong>LinkedIn:</strong> <a class="text-link" href={contact.linkedin}>Connect here</a></p>
				<p><strong>Calendar:</strong> <a class="text-link" href={contact.calendly}>Share your scheduling link</a></p>
			</div>
		</div>

		<form
			class="content-card reveal"
			action={contact.formAction}
			method={contact.method}
			data-testid="contact-form"
		>
			<div class="grid gap-5">
				<label class="field">
					<span>Name</span>
					<input name="name" type="text" autocomplete="name" required />
				</label>

				<label class="field">
					<span>Email</span>
					<input name="email" type="email" autocomplete="email" required />
				</label>

				<label class="field">
					<span>Company</span>
					<input name="company" type="text" autocomplete="organization" />
				</label>

				<label class="field">
					<span>What are you trying to solve?</span>
					<textarea
						name="message"
						rows="6"
						required
						placeholder="A short note about your team, your goals, and where the ambiguity is showing up."
					></textarea>
				</label>

				<button class="button-primary w-full justify-center sm:w-auto" type="submit">
					Send Inquiry
				</button>
				<p class="text-sm leading-6 text-[var(--text-muted)]">{contact.successMessage}</p>
			</div>
		</form>
	</div>
</section>
