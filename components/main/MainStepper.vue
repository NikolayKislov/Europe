<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent, StepperItem  } from '@nuxt/ui'

const userSchema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'Name must be at least 2 characters')),
  email: v.pipe(v.string(), v.email('Invalid email')),
  phone: v.pipe(v.string(), v.minLength(6, 'Phone must be at least 6 characters'))
})

const projectSchema = v.object({
  description: v.pipe(v.string(), v.minLength(20, 'Description must be at least 20 characters')),
  goals: v.string(),
  audience: v.string(),
  competitors: v.string(),
  timeline: v.string()
})

const designSchema = v.object({
  style: v.string([v.minLength(1, 'Please select a design style')]),
  notes: v.string()
})

const featuresSchema = v.object({
  responsive: v.boolean(),
  cms: v.boolean(),
  ecommerce: v.boolean(),
  auth: v.boolean(),
  blog: v.boolean(),
  contact: v.boolean(),
  multilingual: v.boolean(),
  customFeatures: v.string()
})

const contentSchema = v.object({
  pages: v.array(v.string()),
  contentService: v.string(),
  contentNotes: v.string()
})

const technicalSchema = v.object({
  hosting: v.string(),
  cms: v.string(),
  seo: v.string(),
  technicalNotes: v.string()
})

const reviewSchema = v.object({
  budget: v.string(),
  notes: v.string(),
  terms: v.literal(true, 'You must accept the terms and conditions')
})

type FormData = {
  user: v.InferOutput<typeof userSchema>
  project: v.InferOutput<typeof projectSchema>
  design: v.InferOutput<typeof designSchema>
  features: v.InferOutput<typeof featuresSchema>
  content: v.InferOutput<typeof contentSchema>
  technical: v.InferOutput<typeof technicalSchema>
  review: v.InferOutput<typeof reviewSchema>
}

const state = reactive<FormData>({
  user: {
    name: '',
    email: '',
    phone: ''
  },
  project: {
    description: '',
    goals: '',
    audience: '',
    competitors: '',
    timeline: ''
  },
  design: {
    style: '',
    notes: ''
  },
  features: {
    responsive: true,
    cms: false,
    ecommerce: false,
    auth: false,
    blog: false,
    contact: true,
    multilingual: false,
    customFeatures: ''
  },
  content: {
    pages: ['Home', 'Contact'],
    contentService: 'No, I will provide content',
    contentNotes: ''
  },
  technical: {
    hosting: 'I need hosting setup',
    cms: 'WordPress',
    seo: 'Basic SEO Setup',
    technicalNotes: ''
  },
  review: {
    budget: '$1,000 - $3,000',
    notes: '',
    terms: false
  }
})

const designStyleOptions = [
  { value: 'Modern & Minimal', label: 'Modern & Minimal' },
  { value: 'Bold & Vibrant', label: 'Bold & Vibrant' },
  { value: 'Elegant & Classic', label: 'Elegant & Classic' },
  { value: 'Custom', label: 'Custom' }
]

const pageOptions = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact']

const contentServiceOptions = [
  { value: 'Yes, create content for me', label: 'Yes, create content for me' },
  { value: 'No, I will provide content', label: 'No, I will provide content' }
]

const hostingOptions = [
  { value: 'I need hosting setup', label: 'I need hosting setup' },
  { value: 'I have existing hosting', label: 'I have existing hosting' },
  { value: 'Recommend hosting', label: 'Recommend hosting' }
]

const cmsOptions = [
  { value: 'WordPress', label: 'WordPress' },
  { value: 'Custom CMS', label: 'Custom CMS' },
  { value: 'Static Site', label: 'Static Site' },
  { value: 'Webflow', label: 'Webflow' },
  { value: 'Shopify (for e-commerce)', label: 'Shopify (for e-commerce)' }
]

const seoOptions = [
  { value: 'Basic SEO Setup', label: 'Basic SEO Setup' },
  { value: 'Advanced SEO Strategy', label: 'Advanced SEO Strategy' },
  { value: 'Ongoing SEO Management', label: 'Ongoing SEO Management' }
]

const budgetOptions = [
  { value: '$1,000 - $3,000', label: '$1,000 - $3,000' },
  { value: '$3,000 - $7,000', label: '$3,000 - $7,000' },
  { value: '$7,000 - $15,000', label: '$7,000 - $15,000' },
  { value: '$15,000+', label: '$15,000+' },
  { value: 'Need quote', label: 'Need quote' }
]

const items: StepperItem[] = [
  {
    title: 'Your Information',
    description: 'Tell us about yourself',
    icon: 'i-lucide-user'
  },
  {
    title: 'Project Details',
    description: 'Define your project requirements and goals',
    icon: 'i-lucide-clipboard-list'
  }, {
    title: 'Design Preferences',
    description: 'Select your design style and visual direction',
    icon: 'i-lucide-palette'
  }, {
    title: 'Features & Functionality',
    description: 'Choose the features your website needs',
    icon: 'i-lucide-cog'
  }, {
    title: 'Content Strategy',
    description: 'Plan your website content and structure',
    icon: 'i-lucide-file-text'
  }, {
    title: 'Technical Requirements',
    description: 'Specify hosting, CMS, and technical needs',
    icon: 'i-lucide-server'
  }, {
    title: 'Review & Confirm',
    description: 'Finalize your order details',
    icon: 'i-lucide-check-circle'
  }
]

const currentStep = ref(0)
const toast = useToast()

const stepSchemas = [
  userSchema,
  projectSchema,
  designSchema,
  featuresSchema,
  contentSchema,
  technicalSchema,
  reviewSchema
]

const currentSchema = computed(() => stepSchemas[currentStep.value])

async function onSubmit(event: FormSubmitEvent<any>) {
  if (currentStep.value < items.length - 1) {
    next()
  } else {
    console.log('Form submitted:', state)
    toast.add({
      title: 'Success',
      description: 'Your project request has been submitted!',
      color: 'success'
    })
  }
}

function next() {
  if (currentStep.value < items.length - 1) {
    currentStep.value++
  }
}

function prev() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="pt-10 pb-20">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
      Let's make business together?
    </h2>
    <div class="hidden lg:block mb-4 md:mb-8">
      <UStepper v-model="currentStep" :items="items" class="w-full">
        <template #content="{ item }"/>
      </UStepper>
    </div>
    <div class="w-full max-w-2xl mx-auto p-4 md:p-6">
      <div class="p-4 md:p-6 border rounded-lg bg-white dark:bg-gray-900">
        <div class="lg:hidden mb-6">
          <h2 class="text-lg md:text-xl font-bold">{{ items[currentStep]?.title }}</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ items[currentStep]?.description }}</p>
          <div class="mt-2 flex items-center gap-2 text-sm">
            <span>Step {{ currentStep + 1 }} of {{ items.length }}</span>
            <UProgress :value="((currentStep + 1) / items.length) * 100" class="flex-1" />
          </div>
        </div>
        <UForm
            :schema="currentSchema"
            :state="state[Object.keys(state)[currentStep]]"
            class="space-y-4"
            @submit="onSubmit"
        >
          <!-- Step 0: User Information -->
          <div v-if="currentStep === 0" class="space-y-4">
            <UFormField label="Full Name" name="name">
              <UInput v-model="state.user.name" class="w-full"/>
            </UFormField>

            <UFormField label="Email" name="email">
              <UInput v-model="state.user.email" type="email" class="w-full"/>
            </UFormField>

            <UFormField label="Phone Number" name="phone">
              <UInput v-model="state.user.phone" type="tel" class="w-full"/>
            </UFormField>
          </div>

          <!-- Step 1: Project Details -->
          <div v-else-if="currentStep === 1" class="space-y-4">
            <UFormField label="Project Description" name="description">
              <UTextarea v-model="state.project.description" placeholder="Describe your project in detail..." class="w-full"/>
            </UFormField>

            <UFormField label="Project Goals" name="goals">
              <UTextarea v-model="state.project.goals" placeholder="What are your primary goals for the website?" class="w-full"/>
            </UFormField>

            <UFormField label="Target Audience" name="audience">
              <UTextarea v-model="state.project.audience" placeholder="Describe your target audience..." class="w-full"/>
            </UFormField>
          </div>

          <!-- Step 2: Design Preferences -->
          <div v-else-if="currentStep === 2" class="space-y-4">
            <UFormField label="Design Style" name="style">
              <USelect
                  v-model="state.design.style"
                  :items="designStyleOptions"
                  placeholder="Select a design style"
              />
            </UFormField>

            <UFormField label="Additional Design Notes" name="notes">
              <UTextarea v-model="state.design.notes" placeholder="Any specific design preferences or references..." class="w-full"/>
            </UFormField>
          </div>

          <!-- Step 3: Features -->
          <div v-else-if="currentStep === 3" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UFormField name="responsive">
                <UCheckbox v-model="state.features.responsive" label="Responsive Design (Mobile-friendly)" />
              </UFormField>

              <UFormField name="cms">
                <UCheckbox v-model="state.features.cms" label="Content Management System (CMS)" />
              </UFormField>

              <UFormField name="ecommerce">
                <UCheckbox v-model="state.features.ecommerce" label="E-commerce Functionality" />
              </UFormField>

              <UFormField name="auth">
                <UCheckbox v-model="state.features.auth" label="User Registration/Login System" />
              </UFormField>

              <UFormField name="blog">
                <UCheckbox v-model="state.features.blog" label="Blog/News Section" />
              </UFormField>

              <UFormField name="contact">
                <UCheckbox v-model="state.features.contact" label="Contact Forms" />
              </UFormField>

              <UFormField name="multilingual">
                <UCheckbox v-model="state.features.multilingual" label="Multilingual Support" />
              </UFormField>
            </div>

            <UFormField label="Other Custom Features" name="customFeatures">
              <UTextarea v-model="state.features.customFeatures" placeholder="Describe any special functionality you require..." class="w-full"/>
            </UFormField>
          </div>

          <!-- Step 4: Content -->
          <div v-else-if="currentStep === 4" class="space-y-4">
            <UFormField label="Main Pages Needed" name="pages">
              <USelectMenu
                  v-model="state.content.pages"
                  :items="pageOptions"
                  multiple
                  placeholder="Select pages"
              />
            </UFormField>

            <UFormField label="Do you need content creation services?" name="contentService">
              <URadioGroup
                  v-model="state.content.contentService"
                  :items="contentServiceOptions"
              />
            </UFormField>

            <UFormField label="Content Notes" name="contentNotes">
              <UTextarea v-model="state.content.contentNotes" placeholder="Any specific content requirements or brand voice guidelines..." class="w-full"/>
            </UFormField>
          </div>

          <!-- Step 5: Technical -->
          <div v-else-if="currentStep === 5" class="space-y-4">
            <UFormField label="Hosting Solution" name="hosting">
              <USelect
                  v-model="state.technical.hosting"
                  :items="hostingOptions"
              />
            </UFormField>

            <UFormField label="Preferred CMS" name="cms">
              <USelect
                  v-model="state.technical.cms"
                  :items="cmsOptions"
              />
            </UFormField>

            <UFormField label="SEO Requirements" name="seo">
              <USelect
                  v-model="state.technical.seo"
                  :items="seoOptions"
              />
            </UFormField>

            <UFormField label="Other Technical Notes" name="technicalNotes">
              <UTextarea v-model="state.technical.technicalNotes" placeholder="Any special technical requirements or integrations..." class="w-full"/>
            </UFormField>
          </div>

          <!-- Step 6: Review -->
          <div v-else-if="currentStep === 6" class="space-y-4">
            <div class="space-y-4">
              <UCard variant="subtle" :ui="{header: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2', body: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2'}">
                <template #header>
                  <h3 class="font-semibold">Your Information</h3>
                </template>
                <div>
                  <p class="text-sm"><strong>Name:</strong> {{ state.user.name }}</p>
                  <p class="text-sm"><strong>Email:</strong> {{ state.user.email }}</p>
                  <p class="text-sm"><strong>Phone:</strong> {{ state.user.phone }}</p>
                </div>
              </UCard>

              <UCard variant="subtle" :ui="{header: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2', body: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2'}">
                <template #header>
                  <h3 class="font-semibold">Project Details</h3>
                </template>
                <div>
                  <p class="text-sm"><strong>Description:</strong> {{ state.project.description }}</p>
                  <p class="text-sm"><strong>Goals:</strong> {{ state.project.goals }}</p>
                </div>
              </UCard>

              <UCard variant="subtle" :ui="{header: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2', body: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2'}">
                <template #header>
                  <h3 class="font-semibold">Design Preferences</h3>
                </template>
                <div>
                  <p class="text-sm"><strong>Style:</strong> {{ state.design.style }}</p>
                  <p class="text-sm"><strong>Notes:</strong> {{ state.design.notes }}</p>
                </div>
              </UCard>

              <UCard variant="subtle" :ui="{header: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2', body: 'sm:pb-2 sm:pt-3 sm:pl-3 p-2'}">
                <template #header>
                  <h3 class="font-semibold">Selected Features</h3>
                </template>
                <div>
                  <ul class="list-disc pl-5">
                    <li v-if="state.features.responsive" class="text-sm">Responsive Design</li>
                    <li v-if="state.features.cms" class="text-sm">Content Management System</li>
                    <li v-if="state.features.ecommerce" class="text-sm">E-commerce Functionality</li>
                    <li v-if="state.features.auth" class="text-sm">User Registration System</li>
                    <li v-if="state.features.blog" class="text-sm">Blog Section</li>
                    <li v-if="state.features.contact" class="text-sm">Contact Forms</li>
                    <li v-if="state.features.multilingual" class="text-sm">Multilingual Support</li>
                    <li v-if="state.features.customFeatures" class="text-sm">Custom Features: {{ state.features.customFeatures }}</li>
                  </ul>
                </div>
              </UCard>

              <UFormField label="Project Budget Range" name="budget">
                <USelect
                    v-model="state.review.budget"
                    :items="budgetOptions"
                />
              </UFormField>

              <UFormField label="Special Requests or Notes" name="notes">
                <UTextarea v-model="state.review.notes" placeholder="Anything else we should know about your project..." class="w-full"/>
              </UFormField>

              <UFormField name="terms">
                <UCheckbox v-model="state.review.terms" label="I agree to the terms and conditions" />
              </UFormField>
            </div>
          </div>

          <div class="flex justify-between mt-6">
            <UButton
                v-if="currentStep > 0"
                icon="i-lucide-arrow-left"
                variant="outline"
                @click="prev"
            >
              Previous
            </UButton>
            <div v-else/>

            <UButton
                v-if="currentStep < items.length - 1"
                icon="i-lucide-arrow-right"
                icon-right
                type="submit"
            >
              Next
            </UButton>
            <UButton
                v-else
                color="primary"
                icon="i-lucide-check"
                type="submit"
            >
              Submit Order
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .p-6 {
    padding: 1rem;
  }

  .text-xl {
    font-size: 1.125rem;
  }

  .max-w-4xl {
    max-width: 100%;
  }

  .stepper-item {
    padding: 0.5rem;
  }
}
</style>