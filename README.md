This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Generate AI Images

You can generate images with OpenAI and save them to disk:

```bash
OPENAI_API_KEY="your_api_key" npm run generate:image -- --prompt "industrial CNC machine in modern factory" --n 2 --size 1024x1024
```

Useful options:

- `--out ./path/to/folder` to choose output folder
- `--name hero` to set filename prefix
- `--model gpt-image-1` to choose model

Default output folder is your OS temp directory under `b2b-template-images`.

## Generate Text with Gemini

1) Add your key in `.env.local` at project root:

```bash
GEMINI_API_KEY="your_gemini_api_key"
```

2) Run the script:

```bash
npm run generate:gemini -- --prompt "Write a B2B industrial homepage hero copy in English"
```

Optional:

- `--model gemini-2.5-flash`
- `--out ./tmp/gemini-output.txt`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
