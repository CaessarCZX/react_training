// @ts-check
import { expect, test } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:9323/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

test('app shows random facts and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('img')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
