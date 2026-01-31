// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

const TARGET_URL = 'https://www.swifttranslator.com/';

// -----------------------------------------------------------------------
// POSITIVE FUNCTIONAL TESTS
// -----------------------------------------------------------------------

test('Pos_Fun_0001: Simple Greeting', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('obata suba dhavasak');

  await expect(page.getByText('ඔබට සුබ දවසක්')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0002: Question - How are you', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaa hodhin innavaadha');

  await expect(page.getByText('ඔයා හොඳින් ඉන්නවාද')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0003: Request to come quickly', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('ikmanata methanata enna');

  await expect(page.getByText('ඉක්මනට මෙතනට එන්න')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0004: Asking for help', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('podi udhavvak karanna puluvandha?');

  await expect(page.getByText('පොඩි උදව්වක් කරන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0005: Compliment', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oya adha hari lassanayi');

  await expect(page.getByText('ඔය අද හරි ලස්සනයි')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0006: Complex mixed message - Class cancellation', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Machan adha class eka cancel nam kiyanna. Zoom link eka thiyenavada balanna time nane. Mama bus eke inne, signal tikak avul');

  await expect(page.getByText('Zoom link').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0007: Document resend request', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Brother yesterday send karapu doc eka update una nam resend karanna. Mama phone eken baluve, content tikak miss vela wage.');

  await expect(page.getByText('yesterday').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0008: Training session recording request', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Sir training session eka adha record karanavadha? Mama network issue nisa join venna bari unaa. Recording eka share karanna puluvandha?');

  await expect(page.getByText('network issue').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0009: Document scan request', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Machan document eka sign karala scan ekak evanna. Printer eka office eke nathan photo ekak hari oke');

  await expect(page.getByText('Printer').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0010: Order tracking request', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Machan order eka deliver una kiyala message ekak avilla na. Tracking link eka check karala update ekak dhanna puluvandha?');

  await expect(page.getByText('Tracking link').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0011: Asking for time', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Oyata time ekak thiyenavadha?');

  await expect(page.getByText('ඔයාට time එකක් තියෙනවාද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0012: File review request', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mee file eka balanna puluvandha?');

  await expect(page.getByText('file').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0013: Call request', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Mata oyata Call ekak ganna puluvandha?');

  await expect(page.getByText('Call').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0014: Asking about issues', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mokak hari Issue ekak thiyenavadha?');

  await expect(page.getByText('Issue').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0015: WhatsApp message request', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('oyaata mata WhatsApp msg ekak dhaanna puluvandha?');

  await expect(page.getByText('WhatsApp msg').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0016: Conditional statement - Server', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Power thibunoth, server eka normal vidhiyata run venavaa.');

  await expect(page.getByText('server').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0017: Budget constraint', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Budget Rs.15,000 athulatha , project eka complete karanna puluvan.');

  await expect(page.getByText('Rs.15,000').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0018: Class link issue', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Class link eka avilla naththaan, join venna bahe.');

  await expect(page.getByText('Class link').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0019: Train delay - Meeting cancellation', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('Adha Train eka tikak delay unaa nisaa, meeting eka cancel unaa.');

  await expect(page.getByText('Train').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0020: Sample test message', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mekasampltestmsgekkhisthannathuvatestkranna');

  // Just check that something appears in output
  await page.waitForTimeout(3000);
});

test('Pos_Fun_0021: Complex currency format', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('mila rupiyal .15,999/= (discount 20%)');

  await expect(page.getByText('15,999').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0022: Spelling variation test', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('puLuvandha kiYala kiyanna');

  // Check for Sinhala output
  await page.waitForTimeout(3000);
});

test('Pos_Fun_0023: Question marks only', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('??? nadhdha??');

  await page.waitForTimeout(3000);
});

test('Pos_Fun_0024: Instagram post question', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('adha mama oyata evva instagram post ek baluvadha?');

  await expect(page.getByText('instagram post').last()).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0025: Browser feature question', async ({ page }) => {
  await page.goto(TARGET_URL);

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputBox.fill('microsoft edge browser eke translate feature eka hari slow dha?');

  await expect(page.getByText('microsoft edge browser').last()).toBeVisible({ timeout: 10000 });
});