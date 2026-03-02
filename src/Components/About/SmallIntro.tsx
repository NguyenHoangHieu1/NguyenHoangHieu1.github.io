import face from "../../assets/face.png";

const SmallIntro = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          About me
        </h1>
        <div className="w-12 h-1 bg-teal-600 dark:bg-teal-400 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Photo */}
        <div>
          <img
            className="w-full rounded-xl object-cover"
            src={face}
            alt="Hoang Hieu"
          />
        </div>

        {/* Story */}
        <div className="md:col-span-2 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I got into programming at 16, during the pandemic. As an introvert,
            quarantine was the perfect opportunity to explore something new. I
            started with HTML and CSS, then moved to JavaScript — and got
            completely hooked.
          </p>
          <p>
            I was coding from 4 AM before school, then from 1 PM to 7 PM after
            classes. Every single day. Eventually I burned out and stepped away
            from programming for over a year.
          </p>
          <p>
            Choosing IT as my university major brought me back — but this time
            with better habits. I learned to pace myself, enjoy the process, and
            build things that actually matter. That's where I am now.
          </p>
          <p>
            These days I focus on full-stack web development with React,
            TypeScript, and Node.js. I also enjoy writing about Linux, gaming,
            and the tools I use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmallIntro;
