import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-StoreFlow | Automate Your E-commerce Store with AI</title>
        <meta
          name="description"
          content="Save time and streamline tasks with AI-powered workflows for your online store."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="E-StoreFlow Logo" className="w-8 h-8" />
          <span className="font-bold text-xl text-gray-900 tracking-tight">
            E-StoreFlow
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#login" className="hover:text-primary">Log in</a>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-24">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Automate Your <br className="hidden md:inline" />
            E-commerce Store <br className="hidden md:inline" />
            with <span className="text-primary">AI</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Save time and easily streamline tasks with AI-powered workflows for your online store.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-white px-7 py-3 rounded-lg font-medium text-lg shadow hover:bg-blue-700 transition"
          >
            Connect your store
          </a>
          <div className="mt-12 flex flex-col gap-8">
            <FeatureItem
              icon={
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.75l-4.5 2.37.86-5.01L5 10.51l5.04-.73L12 5.5l1.96 4.28 5.04.73-3.36 3.6.86 5.01z"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="AI-generated Content"
              description="Create product descriptions, social media posts, store copy, and more."
            />
            <FeatureItem
              icon={
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="4"
                    strokeLinejoin="round"
                  />
                  <path d="M8 10h8M8 14h5" strokeLinecap="round" />
                </svg>
              }
              title="Daily Store Brief"
              description="Receive a daily summary of your store’s performance and insights."
            />
            <FeatureItem
              icon={
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 9h8m-8 4h5"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Custom Automations"
              description="Set up custom rules to automate repetitive tasks and stay ahead."
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <StoreBriefCard />
        </div>
      </main>
    </>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-lg text-gray-900">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  );
}

function StoreBriefCard() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 w-[340px] max-w-full">
      <div className="mb-4 flex items-center gap-2">
        <span className="font-bold text-gray-700 text-lg">Daily Store Brief</span>
        <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">Demo</span>
      </div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs text-gray-500">Soorcess</div>
          <div className="text-xl font-semibold text-gray-900">$1,524</div>
          <div className="text-sm text-gray-500">Orders</div>
        </div>
        <div className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-lg flex items-center gap-1">
          <span>●</span>
          <span>Low Inventory</span>
        </div>
      </div>
      <div className="mb-2">
        <div className="text-xs text-gray-600">Classic Sneakers</div>
        <div className="text-xs text-gray-500">5 in stock</div>
      </div>
      <div className="my-3 border-t pt-3">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xs text-gray-800">Content idea</div>
          <button className="bg-primary text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition">
            Generate Description
          </button>
        </div>
        <div className="text-xs text-gray-600">
          Social media promotion of a featured product
        </div>
      </div>
      <div className="border-t pt-2 mt-2">
        <div className="text-xs font-semibold mb-2 text-gray-900">Automations</div>
        <ul className="space-y-1">
          <li className="flex justify-between text-xs">
            <span>Low Inventory Alert</span>
            <span className="text-green-600">Active</span>
          </li>
          <li className="flex justify-between text-xs">
            <span>Competitor Price Monitor</span>
            <span className="text-green-600">Active</span>
          </li>
          <li className="flex justify-between text-xs">
            <span>Daily Store Summary</span>
            <span className="text-green-600">Active</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
