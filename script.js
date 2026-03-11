const mathMCQs = [
    {
        id: 1,
        q: "১) ১৭০০ × ১০০ = কত?",
        options: ["১৭০", "১৭০০", "১৭০০০", "১৭০০০০"],
        correct: 3,
    },
    {
        id: 2,
        q: "২) ১১২ × ১২ = ১▢৪৪, ফাঁকা ঘরে কোন অঙ্কটি বসবে?",
        options: ["১", "২", "৩", "৪"],
        correct: 2,
    },
    {
        id: 3,
        q:
            "৩) ৭৮ × ৪০ = ৩১২০, এখানে গুণ্যকে গুণক এবং গুণককে গুণ্য ধরা হলে গুণফল কত হবে?",
        options: ["৩১২", "১৫০০", "৩১২০", "৬০৮৪"],
        correct: 2,
    },
    {
        id: 4,
        q: "৪) রিয়ার ৯৯টি ১০০ টাকার নোট আছে। রিয়ার মোট কত টাকা আছে?",
        options: ["৯৯ টাকা", "৯৯০ টাকা", "৯৯০০ টাকা", "৯৯০০০ টাকা"],
        correct: 2,
    },
    {
        id: 5,
        q: "৫) ১৪৩২ × ৩০০ = কত?",
        options: ["১৭৩২", "৩২৯৬", "৩২৯৬০", "৪২৯৬০০"],
        correct: 3,
    },
];
const mathShortQs = [
    {
        q: "(১) গুণফল নির্ণয়ের সূত্র কী?",
        a:
            "<b>উত্তর:</b> গুণফল নির্ণয়ের সূত্রটি হলো: <b>গুণ্য × গুণক = গুণফল</b>।",
    },
    { q: "(২) ৫৬০০ × ১০ = কত?", a: "<b>উত্তর:</b> ৫৬০০ × ১০ = ৫৬,০০০।" },
    {
        q: "(৩) ৪৮ × ▢ = ২৪০",
        a:
            "<b>সমাধান:</b> এখানে গুণ্য ৪৮ এবং গুণফল ২৪০।<br>আমরা জানি, গুণক = গুণফল ÷ গুণ্য<br>অতএব, গুণক = ২৪০ ÷ ৪৮ = ৫।<br>সুতরাং, ফাঁকা ঘরে <b>৫</b> বসবে।",
    },
    {
        q: "(৪) একটি কলমের দাম ৬ টাকা হলে, ২ ডজন কলমের দাম কত?",
        a:
            "<b>সমাধান:</b><br>আমরা জানি, ১ ডজন = ১২ টি।<br>অতএব, ২ ডজন = (১২ × ২) টি = ২৪ টি।<br><br>দেওয়া আছে,<br>১টি কলমের দাম = ৬ টাকা<br>অতএব, ২৪টি কলমের দাম = (২৪ × ৬) টাকা = ১৪৪ টাকা।<br><br><b>উত্তর:</b> ১৪৪ টাকা।",
    },
    {
        q: "(৫) গুণ্য এবং গুণক স্থান পরিবর্তন করলে গুণফলে কী পরিবর্তন হয়?",
        a:
            "<b>উত্তর:</b> গুণ্য এবং গুণক স্থান পরিবর্তন করলে গুণফলের কোনো পরিবর্তন হয় না। গুণফল একই থাকে। <br>(যেমন: ৫ × ৪ = ২০ এবং ৪ × ৫ = ২০)",
    },
];
const mathMultiplications = [
    {
        q: "(১) ৮৭৫ × ১০০",
        a: "৮৭,৫০০",
        steps:
            "<b>সহজ পদ্ধতি:</b><br>১০০ দিয়ে গুণ করার ক্ষেত্রে, শুধু ৮৭৫ এর ডানপাশে ১০০ এর দুটি শূন্য (০০) বসিয়ে দিলেই হবে।<br><br>অতএব, ৮৭৫ ➔ ৮৭৫০০",
    },
    {
        q: "(২) ৬২১০ × ১০০",
        a: "৬,২১,০০০",
        steps:
            "<b>সহজ পদ্ধতি:</b><br>৬২১০ এর শেষে একটি শূন্য আছে। একে ১০০ দিয়ে গুণ করলে ডানপাশে আরও দুটি শূন্য যোগ হবে।<br><br>অতএব, ৬২১০ ➔ ৬২১০০০",
    },
    {
        q: "(৩) ৯৪৮১ × ৫২০",
        a: "৪,৯৩০,১২০",
        steps: `<div class="bg-white border border-slate-200 p-4 rounded-xl font-mono text-right inline-block w-full text-lg tracking-widest shadow-sm"><div class="text-slate-800">&nbsp;&nbsp;&nbsp;৯৪৮১</div><div class="border-b-2 border-slate-800 pb-1 flex justify-between text-slate-800"><span class="text-slate-400 font-sans text-sm">গুণক</span><span>×&nbsp;৫২০</span></div><div class="pt-1 text-slate-600">&nbsp;&nbsp;০০০০</div><div class="text-slate-600">&nbsp;১৮৯৬২০</div><div class="border-b-2 border-slate-800 pb-1 text-slate-600">৪৭৪০৫০০</div><div class="pt-1 font-extrabold text-emerald-600">৪৯৩০১২০</div></div>`,
    },
    {
        q: "(৪) ১০০০ × ১০০",
        a: "১,০০,০০০",
        steps:
            "<b>সহজ পদ্ধতি:</b><br>১০০০ এর ডানদিকের ৩টি শূন্য এবং ১০০ এর ডানদিকের ২টি শূন্য মিলিয়ে ১ এর ডানপাশে মোট ৫টি শূন্য বসবে।",
    },
    {
        q: "(৫) ৬۹১ × ৫৩২",
        a: "৩,৬৭,৬১২",
        steps: `<div class="bg-white border border-slate-200 p-4 rounded-xl font-mono text-right inline-block w-full text-lg tracking-widest shadow-sm"><div class="text-slate-800">&nbsp;&nbsp;&nbsp;৬৯১</div><div class="border-b-2 border-slate-800 pb-1 flex justify-between text-slate-800"><span class="text-slate-400 font-sans text-sm">গুণক</span><span>×&nbsp;৫৩২</span></div><div class="pt-1 text-slate-600">&nbsp;&nbsp;১৩৮২</div><div class="text-slate-600">&nbsp;২০৭৩০</div><div class="border-b-2 border-slate-800 pb-1 text-slate-600">৩৪৫০০০</div><div class="pt-1 font-extrabold text-emerald-600">৩৬৭৬১২</div></div>`,
    },
    {
        q: "(৬) ৭৫৩ × ৪১৭",
        a: "৩,১৪,০০১",
        steps: `<div class="bg-white border border-slate-200 p-4 rounded-xl font-mono text-right inline-block w-full text-lg tracking-widest shadow-sm"><div class="text-slate-800">&nbsp;&nbsp;&nbsp;৭৫৩</div><div class="border-b-2 border-slate-800 pb-1 flex justify-between text-slate-800"><span class="text-slate-400 font-sans text-sm">গুণক</span><span>×&nbsp;৪১৭</span></div><div class="pt-1 text-slate-600">&nbsp;&nbsp;৫২৭১</div><div class="text-slate-600">&nbsp;&nbsp;৭৫৩০</div><div class="border-b-2 border-slate-800 pb-1 text-slate-600">৩০১২০০</div><div class="pt-1 font-extrabold text-emerald-600">৩১৪০০১</div></div>`,
    },
    {
        q: "(৭) ৫৭০২ × ৫৮০",
        a: "৩,৩০৭,১৬০",
        steps: `<b>সমাধানের ধাপ:</b><br>প্রথমে শূন্য (০) বাদ দিয়ে ৫৭০২ কে ৫৮ দিয়ে গুণ করি:<br>৫৭০২ × ৫৮ = ৩৩০৭১৬<br>এরপর গুণফলের ডানপাশে একটি শূন্য বসিয়ে দিই: ৩৩০৭১৬০।`,
    },
    {
        q: "(৮) ৯১৮ × ৩৫৯",
        a: "৩,২৯,৫৬২",
        steps: `<div class="bg-white border border-slate-200 p-4 rounded-xl font-mono text-right inline-block w-full text-lg tracking-widest shadow-sm"><div class="text-slate-800">&nbsp;&nbsp;&nbsp;৯১৮</div><div class="border-b-2 border-slate-800 pb-1 flex justify-between text-slate-800"><span class="text-slate-400 font-sans text-sm">গুণক</span><span>×&nbsp;৩৫৯</span></div><div class="pt-1 text-slate-600">&nbsp;&nbsp;৮২৬২</div><div class="text-slate-600">&nbsp;৪৫৯০০</div><div class="border-b-2 border-slate-800 pb-1 text-slate-600">২৭৫৪০০</div><div class="pt-1 font-extrabold text-emerald-600">৩২৯৫৬২</div></div>`,
    },
    {
        q: "(৯) ৩৬০৯ × ৮১",
        a: "২,৯২,৩২৯",
        steps: `<div class="bg-white border border-slate-200 p-4 rounded-xl font-mono text-right inline-block w-full text-lg tracking-widest shadow-sm"><div class="text-slate-800">&nbsp;&nbsp;&nbsp;&nbsp;৩৬০৯</div><div class="border-b-2 border-slate-800 pb-1 flex justify-between text-slate-800"><span class="text-slate-400 font-sans text-sm">গুণক</span><span>×&nbsp;&nbsp;৮১</span></div><div class="pt-1 text-slate-600">&nbsp;&nbsp;&nbsp;&nbsp;৩৬০৯</div><div class="border-b-2 border-slate-800 pb-1 text-slate-600">&nbsp;&nbsp;২৮৮৭২০</div><div class="pt-1 font-extrabold text-emerald-600">২৯২৩২৯</div></div>`,
    },
    {
        q: "(১০) ৪০৫৮ × ৬৫৭",
        a: "২,৬৬৬,১০৬",
        steps: `<div class="bg-white border border-slate-200 p-4 rounded-xl font-mono text-right inline-block w-full text-lg tracking-widest shadow-sm"><div class="text-slate-800">&nbsp;&nbsp;&nbsp;&nbsp;৪০৫৮</div><div class="border-b-2 border-slate-800 pb-1 flex justify-between text-slate-800"><span class="text-slate-400 font-sans text-sm">গুণক</span><span>×&nbsp;৬৫৭</span></div><div class="pt-1 text-slate-600">&nbsp;&nbsp;&nbsp;২৮৪০৬</div><div class="text-slate-600">&nbsp;&nbsp;২০২৯০০</div><div class="border-b-2 border-slate-800 pb-1 text-slate-600">২৪৩৪৮০০</div><div class="pt-1 font-extrabold text-emerald-600">২৬৬৬১০৬</div></div>`,
    },
    {
        q: "(১১) ৫৭০২ × ৮০",
        a: "৪,৫৬,১৬০",
        steps: `<b>সহজ পদ্ধতি:</b><br>প্রথমে ৫৭০২ কে ৮ দিয়ে গুণ করি: (৫৭০২ × ৮ = ৪৫৬১৬)।<br>তারপর গুণফলের শেষে ১টি শূন্য বসিয়ে দিই।`,
    },
    {
        q: "(১২) ৬৫১০ × ৮৩০",
        a: "৫,৪০৩,৩০০",
        steps: `<b>সহজ পদ্ধতি:</b><br>উভয় সংখ্যার শেষের শূন্যগুলো বাদ দিয়ে প্রথমে ৬৫১ কে ৮৩ দিয়ে গুণ করি: (৬৫১ × ৮৩ = ৫৪০৩৩)।<br>তারপর গুণফলের শেষে মোট ২টি শূন্য বসিয়ে দিই।`,
    },
];
const mathEasyMultiplications = [
    {
        q: "(১) ৩৮৯ × ৯৯",
        a:
            "<b>সমাধান:</b><br>৩৮৯ × (১০০ - ১)<br>= (৩৮৯ × ১০০) - (৩৮৯ × ১)<br>= ৩৮,৯০০ - ৩৮৯<br>= ৩৮,৫১১",
    },
    {
        q: "(২) ৭০৬ × ৯৯",
        a:
            "<b>সমাধান:</b><br>৭০৬ × (১০০ - ১)<br>= (৭০৬ × ১০০) - (৭০৬ × ১)<br>= ৭০,৬০০ - ৭০৬<br>= ৬৯,৮৯৪",
    },
    {
        q: "(৩) ৯৯৯ × ৫৯",
        a:
            "<b>সমাধান:</b><br>(১০০০ - ১) × ৫৯<br>= (১০০০ × ৫৯) - (১ × ৫৯)<br>= ৫৯,০০০ - ৫৯<br>= ৫৮,৯৪১",
    },
    {
        q: "(৪) ৬০৯ × ৯৯",
        a:
            "<b>সমাধান:</b><br>৬০৯ × (১০০ - ১)<br>= (৬০৯ × ১০০) - (৬০৯ × ১)<br>= ৬০,৯০০ - ৬০৯<br>= ৬০,২৯১",
    },
    {
        q: "(৫) ১৭৪৫ × ৯৯৯",
        a:
            "<b>সমাধান:</b><br>১৭৪৫ × (১০০০ - ১)<br>= (১৭৪৫ × ১০০০) - (১৭৪৫ × ১)<br>= ১৭,৪৫,০০০ - ১৭৪৫<br>= ১৭,৪৩,২৫৫",
    },
    {
        q: "(৬) ৩৭২৬ × ৯৯০",
        a:
            "<b>সমাধান:</b><br>৩৭২৬ × (১০০০ - ১০)<br>= (৩৭২৬ × ১০০০) - (৩৭২৬ × ১০)<br>= ৩৭,২৬,০০০ - ৩৭,২৬০<br>= ৩৬,৮৮,৭৪০",
    },
    {
        q: "(৭) ৫৮৩৯ × ৯০০",
        a:
            "<b>সমাধান:</b><br>৫৮৩৯ × (১০০০ - ১০০)<br>= (৫৮৩৯ × ১০০০) - (৫৮৩৯ × ১০০)<br>= ৫৮,৩৯,০০০ - ৫,৮৩,৯০০<br>= ৫২,৫৫,১০০",
    },
    {
        q: "(৮) ৬৪০০ × ৫০০",
        a:
            "<b>সমাধান:</b><br>৬৪০০ × ৫০০<br>= (৬৪ × ১০০) × (৫ × ১০০)<br>= (৬৪ × ৫) × (১০০ × ১০০)<br>= ৩২০ × ১০০০০<br>= ৩২,০০,০০০",
    },
];
const mathWordProblemsExpanded = [
    {
        q: "৫. এক রিমে ৫০০ তা কাগজ থাকে। ১৬৩ রিম কাগজে কত তা কাগজ হবে?",
        a:
            "<b>সমাধান:</b><br>১ রিম কাগজে থাকে = ৫০০ তা<br>অতএব, ১৬৩ রিম কাগজে থাকবে = (১৬৩ × ৫০০) তা<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ৮১,৫০০ তা<br><br><b>উত্তর:</b> ৮১,৫০০ তা কাগজ হবে।",
    },
    {
        q:
            "৬. একজন শ্রমিক প্রতিদিন ৫২৫ টাকা আয় করেন। ৩ মাস ১৮ দিনে তার কত টাকা আয় হবে? (১ মাস=৩০দিন)",
        a:
            "<b>সমাধান:</b><br>আমরা জানি, ১ মাস = ৩০ দিন।<br>অতএব, ৩ মাস = (৩০ × ৩) দিন = ৯০ দিন।<br>মোট সময় = ৯০ দিন + ১৮ দিন = ১০৮ দিন।<br><br>শ্রমিক ১ দিনে আয় করেন = ৫২৫ টাকা<br>অতএব, ১০৮ দিনে আয় করবেন = (১০৮ × ৫২৫) টাকা<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ৫৬,৭০০ টাকা<br><br><b>উত্তর:</b> তিনি ৫৬,৭০০ টাকা আয় করবেন।",
    },
    {
        q:
            "৭. সাবিহা সেলাই করে প্রতিদিন ৬৫০ টাকা আয় করেন। তিনি ২৩৫ দিনে কত টাকা আয় করেন?",
        a:
            "<b>সমাধান:</b><br>সাবিহা ১ দিনে আয় করেন = ৬৫০ টাকা<br>অতএব, ২৩৫ দিনে আয় করবেন = (২৩৫ × ৬৫০) টাকা<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ১,৫২,৭৫০ টাকা<br><br><b>উত্তর:</b> ১,৫২,৭৫০ টাকা।",
    },
    {
        q:
            "৮. ৪৯টি বান্ডিলের প্রতিটিতে ৫০০টি করে ফুটবল ম্যাচের টিকেট রয়েছে। বান্ডিলগুলোতে মোট কতগুলো টিকেট রয়েছে?",
        a:
            "<b>সমাধান:</b><br>১টি বান্ডিলে টিকেট রয়েছে = ৫০০টি<br>অতএব, ৪৯টি বান্ডিলে টিকেট রয়েছে = (৪৯ × ৫০০)টি<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ২৪,৫০০টি<br><br><b>উত্তর:</b> মোট ২৪,৫০০টি টিকেট রয়েছে।",
    },
    {
        q:
            "৯. একটি চকলেটের বাক্সে ২৫০টি চকলেট আছে। এরূপ ৬৪৭টি বাক্সে কতগুলো চকলেট আছে?",
        a:
            "<b>সমাধান:</b><br>১টি বাক্সে চকলেট আছে = ২৫০টি<br>অতএব, ৬৪৭টি বাক্সে চকলেট আছে = (৬৪৭ × ২৫০)টি<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ১,৬১,৭৫০টি<br><br><b>উত্তর:</b> ১,৬১,৭৫০টি চকলেট আছে।",
    },
    {
        q:
            "১০. মুহিব সাহেব প্রতি মাসে ২৩৪৫ টাকা করে সঞ্চয় করেন। তিনি ১৬ বছরে কত টাকা সঞ্চয় করবেন?",
        a:
            "<b>সমাধান:</b><br>আমরা জানি, ১ বছর = ১২ মাস।<br>অতএব, ১৬ বছর = (১৬ × ১২) মাস = ১৯২ মাস।<br><br>মুহিব সাহেব ১ মাসে সঞ্চয় করেন = ২৩৪৫ টাকা<br>অতএব, ১৯২ মাসে সঞ্চয় করবেন = (১৯২ × ২৩৪৫) টাকা<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ৪,৫০,২৪০ টাকা<br><br><b>উত্তর:</b> তিনি ৪,৫০,২৪০ টাকা সঞ্চয় করবেন।",
    },
    {
        q:
            "১১. একটি বাইসাইকেলের মূল্য ৮৯৭৫ টাকা। এরূপ ৪২৫টি বাইসাইকেলের মূল্য কত?",
        a:
            "<b>সমাধান:</b><br>১টি বাইসাইকেলের মূল্য = ৮৯৭৫ টাকা<br>অতএব, ৪২৫টি বাইসাইকেলের মূল্য = (৪২৫ × ৮৯৭৫) টাকা<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ৩৮,১৪,৩৭৫ টাকা<br><br><b>উত্তর:</b> ৩৮,১৪,৩৭৫ টাকা।",
    },
    {
        q:
            "১২. তোমার কাছে ২৫০ মিটার লম্বা একটি রশি রয়েছে। এরূপ ১৭টি রশির দৈর্ঘ্য মোট কত মিটার হবে?",
        a:
            "<b>সমাধান:</b><br>১টি রশির দৈর্ঘ্য = ২৫০ মিটার<br>অতএব, ১৭টি রশির দৈর্ঘ্য = (১৭ × ২৫০) মিটার<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ৪,২৫০ মিটার<br><br><b>উত্তর:</b> মোট ৪,২৫০ মিটার লম্বা হবে।",
    },
];
const mathStoryProblems = [
    {
        q: "(১) ২৪০ × ২৫ = ▢",
        a:
            "<b>গল্প তৈরি:</b> একটি গল্পের বইয়ের দাম ২৪০ টাকা। তোমার বিদ্যালয়ের পাঠাগারের জন্য এরূপ ২৫টি বই কিনতে মোট কত টাকা লাগবে?<br><br><b>সমাধান:</b><br>১টি বইয়ের দাম = ২৪০ টাকা<br>অতএব, ২৫টি বইয়ের দাম = (২৪০ × ২৫) টাকা = ৬,০০০ টাকা।<br><br><b>উত্তর:</b> ৬০০০ টাকা লাগবে।",
    },
    {
        q: "(২) ▢ × ৭২ = ৭২০০",
        a:
            "<b>গল্প তৈরি:</b> একটি কারখানায় প্রতিদিন সমান সংখ্যক সাবান তৈরি হয়। কারখানায় ৭২ দিনে যদি মোট ৭,২০০টি সাবান তৈরি হয়, তবে প্রতিদিন কতটি সাবান তৈরি হয়?<br><br><b>সমাধান:</b><br>আমরা জানি, গুণফল = ৭২০০ এবং গুণক = ৭২।<br>গুণ্য = গুণফল ÷ গুণক<br>গুণ্য = ৭২০০ ÷ ৭২ = ১০০।<br>অর্থাৎ, ১০০ × ৭২ = ৭২০০।<br><br><b>উত্তর:</b> প্রতিদিন ১০০টি সাবান তৈরি হয়।",
    },
];
const scienceData = {
    short: [
        {
            q: "ক) কয়েকটি দুর্ঘটনার নাম লিখি।",
            a:
                "আমাদের দৈনন্দিন জীবনে বিভিন্ন ধরনের দুর্ঘটনা ঘটতে পারে। নিচে কয়েকটি সাধারণ দুর্ঘটনার নাম দেওয়া হলো:<br>১. কেটে যাওয়া<br>২. আগুনে পুড়ে যাওয়া<br>৩. পানিতে ডোবা<br>৪. সাপে কাটা<br>৫. বিদ্যুত্স্পৃষ্ট হওয়া ইত্যাদি।",
        },
        {
            q: "খ) কেউ বিদ্যুত্স্পৃষ্ট হলে কী করতে হয়?",
            a:
                "কেউ বিদ্যুত্স্পৃষ্ট হলে তাকে উদ্ধারের জন্য নিচের পদক্ষেপগুলো নিতে হবে:<br>১. প্রথমেই বিদ্যুতের মেইন সুইচ বন্ধ করে দিতে হবে অথবা প্লাগ খুলে ফেলতে হবে।<br>২. যদি তা সম্ভব না হয়, তবে শুকনো কাঠ বা বাঁশ দিয়ে ব্যক্তিকে তার থেকে আলাদা করতে হবে।<br>৩. কোনো অবস্থাতেই খালি হাতে তাকে স্পর্শ করা যাবে না।<br>৪. দ্রুত ডাক্তার ডাকতে হবে।",
        },
        {
            q: "গ) প্রাথমিক চিকিৎসা বলতে কী বুঝায়?",
            a:
                "কোনো ব্যক্তি দুর্ঘটনায় আহত হলে, ডাক্তার আসার আগে বা হাসপাতালে নেওয়ার পূর্বে তাৎক্ষণিকভাবে যে সাময়িক চিকিৎসা দেওয়া হয়, তাকেই প্রাথমিক চিকিৎসা বলে। এর প্রধান উদ্দেশ্য হলো রোগীর অবস্থার অবনতি রোধ করা এবং সাময়িক আরাম দেওয়া।",
        },
    ],
    broad: [
        {
            q: "ক) প্রাথমিক চিকিৎসার সাধারণ নিয়মগুলো কী কী?",
            a:
                "প্রাথমিক চিকিৎসার সাধারণ নিয়মগুলো নিচে দেওয়া হলো:<br>১. <b>সাহায্য চাওয়া:</b> প্রথমেই বড়দের ডাকতে হবে বা জরুরি সেবায় খবর দিতে হবে।<br>২. <b>নিজেকে নিরাপদ রাখা:</b> সাহায্য করার আগে নিজের নিরাপত্তা নিশ্চিত করতে হবে।<br>৩. <b>আহত ব্যক্তিকে শান্ত রাখা:</b> আহত ব্যক্তিকে সাহস দিতে হবে এবং শান্ত রাখার চেষ্টা করতে হবে।<br>৪. <b>বেশি না নাড়ানো:</b> প্রয়োজন ছাড়া আহত ব্যক্তিকে খুব বেশি নাড়ানো যাবে না, এতে ক্ষতি বাড়তে পারে।<br>৫. <b>দ্রুত ব্যবস্থা গ্রহণ:</b> আঘাতের ধরন বুঝে দ্রুত প্রাথমিক ব্যবস্থা নিতে হবে।",
        },
        {
            q: "খ) পানিতে ডোবা ব্যক্তিকে কীভাবে প্রাথমিক চিকিৎসা দিতে হয়?",
            a:
                "পানিতে ডোবা ব্যক্তিকে উদ্ধারের পর নিচের ধাপে প্রাথমিক চিকিৎসা দিতে হবে:<br>১. রোগীকে দ্রুত সমতল স্থানে চিত করে শুইয়ে দিতে হবে।<br>২. তার চিবুক আলতো করে উপরে তুলে ধরতে হবে, যাতে শ্বাসনালি খোলা থাকে।<br>৩. রোগী শ্বাস না নিলে, তার নাক চেপে ধরে মুখে মুখ লাগিয়ে বাতাস দিতে হবে।<br>৪. বাতাস দেওয়ার পাশাপাশি রোগীর বুকে হালকাভাবে চাপ দিতে হবে।<br>৫. যত দ্রুত সম্ভব রোগীকে হাসপাতালে বা ডাক্তারের কাছে নিয়ে যেতে হবে।",
        },
        {
            q: "গ) দুর্ঘটনানুমুক্ত থাকতে কী কী সতর্কতা অবলম্বন করতে হয়?",
            a:
                "দুর্ঘটনা এড়াতে আমাদের নিচের সতর্কতাগুলো অবলম্বন করা উচিত:<br>১. <b>রাস্তায় সতর্কতা:</b> রাস্তা পার হওয়ার সময় দুই পাশ দেখতে হবে এবং জেব্রা ক্রসিং ব্যবহার করতে হবে।<br>২. <b>বিপজ্জনক বস্তু পরিহার:</b> আগুন, ব্লেড, কাঁচি ইত্যাদি বিপজ্জনক জিনিস নিয়ে খেলা যাবে না।<br>৩. <b>বিদ্যুৎ ব্যবহারে সতর্কতা:</b> ভেজা হাতে বৈদ্যুতিক সুইচ বা তার ধরা যাবে না।<br>৪. <b>জলাশয়ে সতর্কতা:</b> সাঁতার না জানলে পুকুর বা নদীতে নামা যাবেবিধা।<br>৫. <b>সচেতনতা:</b> সব সময় বড়দের উপদেশ মেনে চলতে হবে এবং সাবধানে চলাফেরা করতে হবে।",
        },
    ],
};
const englishDialogue = [
    {
        speaker: "Ripa",
        text: "Hi, Rahat. How're you doing?",
        bangla:
            "উচ্চারণ: হাই, রাহাত। হাউ আর ইউ ডুইং?<br>অর্থ: হাই, রাহাত। কেমন আছো?",
    },
    {
        speaker: "Rahat",
        text: "Hi, Ripa. I'm fine. How's everything?",
        bangla:
            "উচ্চারণ: হাই, রিপা। আই অ্যাম ফাইন। হাউ ইজ এভরিথিং?<br>অর্থ: হাই, রিপা। আমি ভালো আছি। সব কিছুর কী অবস্থা?",
    },
    {
        speaker: "Ripa",
        text: "Good. You look happy. Anything special?",
        bangla:
            "উচ্চারণ: গুড। ইউ লুক হ্যাপি। এনিথিং স্পেশাল?<br>অর্থ: ভালো। তোমাকে খুব খুশি দেখাচ্ছে। বিশেষ কিছু আছে কি?",
    },
    {
        speaker: "Rahat",
        text: "Yes. I'm excited about our annual sports.",
        bangla:
            "উচ্চারণ: ইয়েস। আই অ্যাম এক্সাইটেড এবাউট আওয়ার অ্যানুয়াল স্পোর্টস।<br>অর্থ: হ্যাঁ। আমি আমাদের বার্ষিক ক্রীড়া প্রতিযোগিতা নিয়ে খুব রোমাঞ্চিত।",
    },
    {
        speaker: "Ripa",
        text: "Oh, I see. Which events are you participating in?",
        bangla:
            "উচ্চারণ: ওহ, আই সি। হুইচ ইভেন্টস আর ইউ পার্টিসিপেটিং ইন?<br>অর্থ: ওহ, বুঝতে পেরেছি। তুমি কোন কোন খেলায় অংশগ্রহণ করছ?",
    },
    {
        speaker: "Rahat",
        text: "I'm going to participate in the 100-metre race and long jump.",
        bangla:
            "উচ্চারণ: আই অ্যাম গোইং টু পার্টিসিপেট ইন দা ১০০-মিটার রেস অ্যান্ড লং জাম্প।<br>অর্থ: আমি ১০০ মিটার দৌড় এবং দীর্ঘ লাফে অংশগ্রহণ করতে যাচ্ছি।",
    },
    {
        speaker: "Ripa",
        text: "That's great. Wish you good luck!",
        bangla:
            "উচ্চারণ: দ্যাটস গ্রেট। উইশ ইউ গুড লাক!<br>অর্থ: দারুণ। তোমার জন্য শুভকামনা!",
    },
    {
        speaker: "Rahat",
        text: "Thank you so much, Ripa. Are you participating in any event?",
        bangla:
            "উচ্চারণ: থ্যাংক ইউ সো মাচ, রিপা। আর ইউ পার্টিসিপেটিং ইন এনি ইভেন্ট?<br>অর্থ: অনেক ধন্যবাদ, রিপা। তুমি কি কোনো খেলায় অংশগ্রহণ করছ?",
    },
    {
        speaker: "Ripa",
        text: "Yes, I'm going to participate in skipping.",
        bangla:
            "উচ্চারণ: ইয়েস, আই অ্যাম গোইং টু পার্টিসিপেট ইন স্কিপিং।<br>অর্থ: হ্যাঁ, আমি দড়ি লাফে (স্কিপিং) অংশগ্রহণ করতে যাচ্ছি।",
    },
    {
        speaker: "Rahat",
        text: "Oh, you like skipping! Wish you all the best.",
        bangla:
            "উচ্চারণ: ওহ, ইউ লাইক স্কিপিং! উইশ ইউ অল দা বেস্ট।<br>অর্থ: ওহ, তুমি দড়ি লাফ পছন্দ করো! তোমার জন্য অনেক শুভকামনা।",
    },
    {
        speaker: "Ripa",
        text: "Thank you So much. Bye.",
        bangla: "উচ্চারণ: থ্যাংক ইউ সো মাচ। বাই।<br>অর্থ: অনেক ধন্যবাদ। বিদায়।",
    },
    {
        speaker: "Rahat",
        text: "Have a great day.",
        bangla: "উচ্চারণ: হ্যাভ আ গ্রেট ডে।<br>অর্থ: তোমার দিনটি ভালো কাটুক।",
    },
];
const seeghas = [
    "واحد مذكر غائب (ওয়াহিদ মুযাক্কার গায়িব - ১ জন পুরুষ, নাম পুরুষ)",
    "تثنية مذكر غائب (তাসনিয়াহ মুযাক্কার গায়িব - ২ জন পুরুষ, নাম পুরুষ)",
    "جمع مذكر غائب (জমা মুযাক্কার গায়িব - সকল পুরুষ, নাম পুরুষ)",
    "واحد مؤنث غائب (ওয়াহিদ মুআন্নাস গায়িব - ১ জন মহিলা, নাম পুরুষ)",
    "تثنية مؤنث غائب (তাসনিয়াহ মুআন্নাস গায়িব - ২ জন মহিলা, নাম পুরুষ)",
    "جمع مؤنث غائب (জমা মুআন্নাস গায়িব - সকল মহিলা, নাম পুরুষ)",
    "واحد مذكر حاضر (ওয়াহিদ মুযাক্কার হাযির - ১ জন পুরুষ, মধ্যম পুরুষ)",
    "تثنية مذكر حاضر (তাসনিয়াহ মুযাক্কার হাযির - ২ জন পুরুষ, মধ্যম পুরুষ)",
    "جمع مذكر حاضر (জমা মুযাক্কার হাযির - সকল পুরুষ, মধ্যম পুরুষ)",
    "واحد مؤنث حاضر (ওয়াহিদ মুআন্নাস হাযির - ১ জন মহিলা, মধ্যম পুরুষ)",
    "تثنية مؤنث حاضر (তাসনিয়াহ মুআন্নাস হাযির - ২ জন মহিলা, মধ্যম পুরুষ)",
    "جمع مؤنث حاضر (জমা মুআন্নাস হাযির - সকল মহিলা, মধ্যম পুরুষ)",
    "واحد متكلم (ওয়াহিদ মুতাকাল্লিম - ১ জন পুরুষ/মহিলা, উত্তম পুরুষ)",
    "جمع متكلم (জমা মুতাকাল্লিম - ২ জন/সকল পুরুষ/মহিলা, উত্তম পুরুষ)",
];
const arabicData = {
    maroof_mushbat: {
        words: [
            "فَعَلَ",
            "فَعَلَا",
            "فَعَلُوْا",
            "فَعَلَتْ",
            "فَعَلَتَا",
            "فَعَلْنَ",
            "فَعَلْتَ",
            "فَعَلْتُمَا",
            "فَعَلْتُمْ",
            "فَعَلْتِ",
            "فَعَلْتُمَا",
            "فَعَلْتُنَّ",
            "فَعَلْتُ",
            "فَعَلْنَا",
        ],
        pronunciations: [
            "ফায়ালা",
            "ফায়ালা-",
            "ফায়ালূ",
            "ফায়ালাত",
            "ফায়ালাতা-",
            "ফায়ালনা",
            "ফায়ালতা",
            "ফায়ালতুমা-",
            "ফায়ালতুম",
            "ফায়ালতি",
            "ফায়ালতুমা-",
            "ফায়ালতুন্না",
            "ফায়ালতু",
            "ফায়ালনা-",
        ],
        meanings: [
            "সে করল",
            "তারা দুজন করল",
            "তারা করল",
            "সে (মহিলা) করল",
            "তারা দুজন (মহিলা) করল",
            "তারা (মহিলা) করল",
            "তুমি করলে",
            "তোমরা দুজন করলে",
            "তোমরা করলে",
            "তুমি (মহিলা) করলে",
            "তোমরা দুজন (মহিলা) করলে",
            "তোমরা (মহিলা) করলে",
            "আমি করলাম",
            "আমরা করলাম",
        ],
    },
    majhool_mushbat: {
        words: [
            "فُعِلَ",
            "فُعِلَا",
            "فُعِلُوْا",
            "فُعِلَتْ",
            "فُعِلَتَا",
            "فُعِلْنَ",
            "فُعِلْتَ",
            "فُعِلْتُمَا",
            "فُعِلْتُمْ",
            "فُعِلْتِ",
            "فُعِلْتُمَا",
            "فُعِلْتُنَّ",
            "فُعِلْتُ",
            "فُعِلْنَا",
        ],
        pronunciations: [
            "ফুয়িলা",
            "ফুয়িলা-",
            "ফুয়িলূ",
            "ফুয়িলাত",
            "ফুয়িলাতা-",
            "ফুয়িলনা",
            "ফুয়িলতা",
            "ফুয়িলতুমা-",
            "ফুয়িলতুম",
            "ফুয়িলতি",
            "ফুয়িলতুমা-",
            "ফুয়িলতুন্না",
            "ফুয়িলতু",
            "ফুয়িলনা-",
        ],
        meanings: [
            "তাকে করা হল",
            "তাদের দুজনকে করা হল",
            "তাদেরকে করা হল",
            "তাকে (মহিলা) করা হল",
            "তাদের দুজনকে (মহিলা) করা হল",
            "তাদেরকে (মহিলা) করা হল",
            "তোমাকে করা হল",
            "তোমাদের দুজনকে করা হল",
            "তোমাদেরকে করা হল",
            "তোমাকে (মহিলা) করা হল",
            "তোমাদের দুজনকে (মহিলা) করা হল",
            "তোমাদেরকে (মহিলা) করা হল",
            "আমাকে করা হল",
            "আমাদেরকে করা হল",
        ],
    },
    maroof_nafi: {
        words: [
            "مَا فَعَلَ",
            "مَا فَعَلَا",
            "مَا فَعَلُوْا",
            "مَا فَعَلَتْ",
            "مَا فَعَلَتَا",
            "مَا فَعَلْنَ",
            "مَا فَعَلْتَ",
            "مَا فَعَلْتُمَا",
            "مَا فَعَلْتُمْ",
            "مَا فَعَلْتِ",
            "مَا فَعَلْتُمَا",
            "مَا فَعَلْتُنَّ",
            "مَا فَعَلْتُ",
            "مَا فَعَلْنَا",
        ],
        pronunciations: [
            "মা-ফায়ালা",
            "মা-ফায়ালা-",
            "মা-ফায়ালূ",
            "মা-ফায়ালাত",
            "মা-ফায়ালাতা-",
            "মা-ফায়ালনা",
            "মা-ফায়ালতা",
            "মা-ফায়ালতুমা-",
            "মা-ফায়ালতুম",
            "মা-ফায়ালতি",
            "মা-ফায়ালতুমা-",
            "মা-ফায়ালতুন্না",
            "মা-ফায়ালতু",
            "মা-ফায়ালনা-",
        ],
        meanings: [
            "সে করল না",
            "তারা দুজন করল না",
            "তারা করল না",
            "সে (মহিলা) করল না",
            "তারা দুজন (মহিলা) করল না",
            "তারা (মহিলা) করল না",
            "তুমি করলে না",
            "তোমরা দুজন করলে না",
            "তোমরা করলে না",
            "তুমি (মহিলা) করলে না",
            "তোমরা দুজন (মহিলা) করলে না",
            "তোমরা (মহিলা) করলে না",
            "আমি করলাম না",
            "আমরা করলাম না",
        ],
    },
    majhool_nafi: {
        words: [
            "مَا فُعِلَ",
            "مَا فُعِلَا",
            "مَا فُعِلُوْا",
            "مَا فُعِلَتْ",
            "مَا فُعِلَتَا",
            "مَا فُعِلْنَ",
            "مَا فُعِلْتَ",
            "مَا فُعِلْتُمَا",
            "مَا فُعِلْتُمْ",
            "مَا فُعِلْتِ",
            "مَا فُعِلْتُمَا",
            "مَا فُعِلْتُنَّ",
            "مَا فُعِلْتُ",
            "مَا فُعِلْنَا",
        ],
        pronunciations: [
            "মা-ফুয়িলা",
            "মা-ফুয়িলা-",
            "মা-ফুয়িলূ",
            "মা-ফুয়িলাত",
            "মা-ফুয়িলাতা-",
            "মা-ফুয়িলনা",
            "মা-ফুয়িলতা",
            "মা-ফুয়িলতুমা-",
            "মা-ফুয়িলতুম",
            "মা-ফুয়িলতি",
            "মা-ফুয়িলতুমা-",
            "মা-ফুয়িলতুন্না",
            "মা-ফুয়িলতু",
            "মা-ফুয়িলনা-",
        ],
        meanings: [
            "তাকে করা হল না",
            "তাদের দুজনকে করা হল না",
            "তাদেরকে করা হল না",
            "তাকে (মহিলা) করা হল না",
            "তাদের দুজনকে (মহিলা) করা হল না",
            "তাদেরকে (মহিলা) করা হল না",
            "তোমাকে করা হল না",
            "তোমাদের দুজনকে করা হল না",
            "তোমাদেরকে করা হল না",
            "তোমাকে (মহিলা) করা হল না",
            "তোমাদের দুজনকে (মহিলা) করা হল না",
            "তোমাদেরকে (মহিলা) করা হল না",
            "আমাকে করা হল না",
            "আমাদেরকে করা হল না",
        ],
    },
};
let currentState = {
    subject: "bangla",
    chartInstance: null,
    isMeaningBlurred: false,
};
window.switchTab = function (subject) {
    currentState.subject = subject;
    const subjects = ["bangla", "science", "english", "arabic", "math", "quran"];
    const colors = {
        bangla: "indigo",
        science: "emerald",
        english: "pink",
        arabic: "violet",
        math: "orange",
        quran: "teal",
    };
    
    subjects.forEach((s) => {
        const tabs = document.querySelectorAll(`.tab-btn-${s}`);
        tabs.forEach(tab => {
            tab.classList.remove("tab-active", "bg-white", "shadow-lg", "shadow-sm", "text-slate-900", "scale-105");
            tab.style.borderBottomColor = "transparent";
            tab.style.color = "#64748b";
        });
        document.getElementById(`content-${s}`).style.display = "none";
    });

    const activeTabs = document.querySelectorAll(`.tab-btn-${subject}`);
    const activeColor = `var(--${colors[subject]}-500, ${colors[subject]})`;
    
    activeTabs.forEach(activeTab => {
        activeTab.classList.add("tab-active", "bg-white", "shadow-sm", "scale-105");
        activeTab.style.borderBottomColor = colors[subject];
        activeTab.style.color = "#1e293b";
    });
    
    const content = document.getElementById(`content-${subject}`);
    content.style.display = "block";
    content.classList.remove("animate-pop-in");
    void content.offsetWidth; // Trigger reflow
    content.classList.add("animate-pop-in");
    
    document.getElementById("main-content-area").scrollTop = 0;
    
    // Only scroll the desktop tab into view if it's visible, else scroll the mobile tab
    const desktopTab = document.querySelector(`.tab-btn-${subject}.hidden.md\\:flex`) || document.querySelector(".hidden.md\\:flex .tab-btn-" + subject);
    if (desktopTab && window.innerWidth >= 768) {
         desktopTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else {
         const mobileTab = document.querySelector(`.md\\:hidden .tab-btn-${subject}`);
         if (mobileTab) {
             mobileTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
         }
    }
    
    // Smooth background transition
    document.body.style.backgroundColor = `rgba(${subject === 'bangla' ? '99,102,241,0.05' : 
                                            subject === 'science' ? '16,185,129,0.05' : 
                                            subject === 'english' ? '236,72,153,0.05' : 
                                            subject === 'arabic' ? '139,92,246,0.05' : 
                                            subject === 'math' ? '245,158,11,0.05' : '20,184,166,0.05'})`;
};
window.toggleAccordion = function (id) {
    const el = document.getElementById(id);
    if (el.classList.contains("hidden")) {
        el.classList.remove("hidden");
        el.classList.add("animate-pop-in");
    } else {
        el.classList.add("hidden");
        el.classList.remove("animate-pop-in");
    }
};
function renderMath() {
    const mcqContainer = document.getElementById("math-mcq-container");
    const labels = ["ক", "খ", "গ", "ঘ"];
    mcqContainer.innerHTML = mathMCQs
        .map(
            (q, qIndex) => `
                <div class="mb-5 bg-orange-50 p-4 rounded-2xl border border-orange-100">
                    <p class="font-bold text-slate-800 mb-3 text-lg">${q.q}</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        ${q.options
                            .map(
                                (opt, optIndex) => `
                            <button id="btn-${q.id}-${optIndex}" onclick="checkAnswer(${q.id}, ${optIndex}, ${q.correct})" 
                                class="bg-white border-2 border-slate-200 rounded-xl px-3 py-2 text-base font-bold text-left hover:border-orange-400 hover:shadow-md transition flex items-center gap-3">
                                <span class="bg-slate-100 text-slate-600 rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0 border border-slate-200">${labels[optIndex]}</span>
                                <span>${opt}</span>
                            </button>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            `
        )
        .join("");
    const generateAccordion = (dataArray, prefix) => {
        return dataArray
            .map(
                (item, index) => `
                    <div class="border-2 border-slate-100 rounded-2xl p-4 sm:p-5 hover:border-orange-300 transition-colors bg-white shadow-sm">
                        <p class="font-extrabold text-slate-800 text-lg">${item.q}</p>
                        <button onclick="toggleAccordion('ans-${prefix}-${index}')" class="mt-3 bg-orange-100 text-orange-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-orange-200 transition">✨ উত্তর দেখুন</button>
                        <div id="ans-${prefix}-${index}" class="hidden mt-4 pt-4 border-t-2 border-dashed border-orange-200 text-slate-700 bg-orange-50 p-4 rounded-xl text-base leading-relaxed">
                            ${item.a}
                        </div>
                    </div>
                `
            )
            .join("");
    };
    document.getElementById(
        "math-short-qs-container"
    ).innerHTML = generateAccordion(mathShortQs, "short");
    document.getElementById(
        "math-easy-mul-container"
    ).innerHTML = generateAccordion(mathEasyMultiplications, "easy");
    document.getElementById(
        "math-word-expanded-container"
    ).innerHTML = generateAccordion(mathWordProblemsExpanded, "word");
    document.getElementById(
        "math-story-container"
    ).innerHTML = generateAccordion(mathStoryProblems, "story");
    document.getElementById(
        "math-multiplications-container"
    ).innerHTML = mathMultiplications
        .map(
            (item, index) => `
                <div class="border-2 border-slate-100 rounded-2xl p-4 text-center bg-white hover:border-orange-300 transition shadow-sm flex flex-col h-full">
                    <div class="bg-slate-50 rounded-xl mb-4 overflow-hidden border border-slate-100">
                        <p class="text-lg font-extrabold text-slate-800 py-2">${item.q}</p>
                        <p class="text-xl font-black text-emerald-600 bg-emerald-100 py-2 border-t border-emerald-200">= ${item.a}</p>
                    </div>
                    <div class="mt-auto">
                        <button onclick="toggleAccordion('ans-mul-${index}')" class="text-sm text-white font-bold w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-xl transition">কীভাবে হলো? 🧐</button>
                        <div id="ans-mul-${index}" class="hidden mt-3 text-left border-t-2 border-slate-100 pt-3">
                            <div class="text-slate-700 text-sm leading-relaxed">${item.steps}</div>
                        </div>
                    </div>
                </div>
            `
        )
        .join("");
}
function renderScience() {
    const createAccordion = (item, index, prefix) => `
                <div class="border-2 border-slate-100 rounded-2xl p-4 sm:p-5 hover:border-emerald-300 transition-colors bg-white shadow-sm">
                    <p class="font-extrabold text-slate-800 text-lg">${item.q}</p>
                    <button onclick="toggleAccordion('ans-${prefix}-${index}')" class="mt-3 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-200 transition">✨ উত্তর দেখুন</button>
                    <div id="ans-${prefix}-${index}" class="hidden mt-4 pt-4 border-t-2 border-dashed border-emerald-200 text-slate-700 bg-emerald-50 p-4 rounded-xl text-base leading-relaxed font-medium">
                        ${item.a}
                    </div>
                </div>
            `;
    document.getElementById(
        "science-short-qs"
    ).innerHTML = scienceData.short
        .map((item, i) => createAccordion(item, i, "sci-short"))
        .join("");
    document.getElementById(
        "science-broad-qs"
    ).innerHTML = scienceData.broad
        .map((item, i) => createAccordion(item, i, "sci-broad"))
        .join("");
}
function renderEnglish() {
    const chatContainer = document.getElementById("chat-interface");
    const html = englishDialogue
        .map((dialogue) => {
            const isRipa = dialogue.speaker === "Ripa";
            const alignClass = isRipa ? "items-start" : "items-end";
            const bgClass = isRipa
                ? "bg-white border-2 border-rose-100 text-slate-800"
                : "bg-rose-500 text-white";
            const textClass = isRipa ? "text-slate-500" : "text-rose-100";
            const avatar = isRipa ? "👧🏻" : "👦🏻";
            return `
                    <div class="flex flex-col ${alignClass} mb-4">
                        <span class="text-sm font-bold text-slate-400 mb-1 mx-1">${
                            dialogue.speaker
                        } ${avatar}</span>
                        <div class="${bgClass} rounded-2xl px-4 py-3 max-w-[90%] sm:max-w-[75%] shadow-sm">
                            <p class="font-bold text-base md:text-lg font-sans">${
                                dialogue.text
                            }</p>
                            <p class="text-xs md:text-sm mt-2 border-t ${
                                isRipa ? "border-slate-100" : "border-rose-400"
                            } pt-2 ${textClass} font-medium">${
                dialogue.bangla
            }</p>
                        </div>
                    </div>
                `;
        })
        .join("");
    chatContainer.innerHTML = `<div class="flex flex-col">${html}</div>`;
}
function initChart() {
    const ctx = document.getElementById("progressChart").getContext("2d");
    currentState.chartInstance = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["বাকি", "শেষ"],
            datasets: [
                {
                    data: [100, 0],
                    backgroundColor: ["#f1f5f9", "#3b82f6"],
                    borderWidth: 0,
                    borderRadius: 10,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "75%",
            plugins: { legend: { display: false } },
            animation: { animateScale: true, animateRotate: true },
        },
        plugins: [
            {
                id: "textCenter",
                beforeDraw: function (chart) {
                    var width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;
                    ctx.restore();
                    var fontSize = (height / 100).toFixed(2);
                    ctx.font =
                        "900 " + fontSize + "em 'Baloo Da 2', sans-serif";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#1e293b";
                    var text = chart.data.datasets[0].data[1] + "%",
                        textX = Math.round(
                            (width - ctx.measureText(text).width) / 2
                        ),
                        textY = height / 2;
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                },
            },
        ],
    });
}

function createConfetti(count = 50) {
    const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4"];
    const shapes = ['square', 'circle', 'triangle'];
    
    for (let i = 0; i < count; i++) {
        let conf = document.createElement("div");
        conf.className = "confetti";
        const size = Math.random() * 12 + 6 + "px";
        
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.animation = `fall ${Math.random() * 2 + 2}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        if (shape === 'triangle') {
            conf.style.width = "0";
            conf.style.height = "0";
            conf.style.backgroundColor = "transparent";
            conf.style.borderLeft = (parseFloat(size)/2) + "px solid transparent";
            conf.style.borderRight = (parseFloat(size)/2) + "px solid transparent";
            conf.style.borderBottom = size + ` solid ${color}`;
        } else {
            conf.style.width = size;
            conf.style.height = size;
            conf.style.backgroundColor = color;
            if (shape === 'circle') conf.style.borderRadius = "50%";
        }
        
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 4000);
    }
}

window.toggleMeaningBlur = function () {
    currentState.isMeaningBlurred = !currentState.isMeaningBlurred;
    const btn = document.getElementById("blur-btn");
    const cells = document.querySelectorAll(".meaning-cell");
    if (currentState.isMeaningBlurred) {
        btn.innerHTML = "👁️‍🗨️ অর্থ দেখান";
        btn.classList.replace("bg-violet-800", "bg-slate-500");
        btn.classList.replace("hover:bg-violet-900", "hover:bg-slate-600");
        cells.forEach((c) => c.classList.add("blur-text"));
    } else {
        btn.innerHTML = "👁️ অর্থ লুকান";
        btn.classList.replace("bg-slate-500", "bg-violet-800");
        btn.classList.replace("hover:bg-slate-600", "hover:bg-violet-900");
        cells.forEach((c) => c.classList.remove("blur-text"));
    }
};

window.renderArabicTable = function () {
    const selection = document.getElementById("arabic-bahs-selector").value;
    const data = arabicData[selection];
    const tbody = document.getElementById("arabic-table-body");
    const blurClass = currentState.isMeaningBlurred ? "blur-text" : "";
    let html = "";
    for (let i = 0; i < 14; i++) {
        html += `
                    <tr class="border-b border-slate-100 hover:bg-violet-50 transition-colors">
                        <td class="p-3 border-r border-slate-100 text-center">
                            <div class="font-arabic text-2xl md:text-3xl text-slate-800" dir="rtl">${data.words[i]}</div>
                            <div class="text-violet-600 text-xs md:text-sm font-bold mt-1">উচ্চারণ: ${data.pronunciations[i]}</div>
                        </td>
                        <td class="p-3 border-r border-slate-100 text-slate-700 font-medium text-sm md:text-base meaning-cell ${blurClass}">${data.meanings[i]}</td>
                        <td class="p-3 text-sm md:text-base text-violet-800 font-bold" dir="rtl">${seeghas[i]}</td>
                    </tr>
                `;
    }
    tbody.innerHTML = html;
};
window.checkAnswer = function (qId, selectedIdx, correctIdx) {
    const parent = document.getElementById(`btn-${qId}-${selectedIdx}`).parentElement;
    const buttons = parent.querySelectorAll('button');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add("opacity-60", "grayscale-[0.5]");
    });

    let selectedBtn = document.getElementById(`btn-${qId}-${selectedIdx}`);
    selectedBtn.classList.remove("opacity-60", "grayscale-[0.5]");
    
    // Save answer state
    const mcqAnswers = JSON.parse(localStorage.getItem('mcqAnswers') || '{}');
    mcqAnswers[qId] = { selectedIdx, correctIdx };
    localStorage.setItem('mcqAnswers', JSON.stringify(mcqAnswers));

    if (selectedIdx === correctIdx) {
        selectedBtn.className = "bg-emerald-50 border-4 border-emerald-500 text-emerald-800 rounded-2xl px-4 py-3 text-lg font-black text-left flex items-center gap-3 shadow-lg scale-105 transition-all animate-bounce-soft";
        selectedBtn.innerHTML += " <span class='text-2xl'>🎉 ✅</span>";
        createConfetti(25);
    } else {
        selectedBtn.className = "bg-rose-50 border-4 border-rose-500 text-rose-800 rounded-2xl px-4 py-3 text-lg font-black text-left flex items-center gap-3 shadow-md animate-shake";
        selectedBtn.innerHTML += " <span class='text-2xl'>❌</span>";
        
        let correctBtn = document.getElementById(`btn-${qId}-${correctIdx}`);
        correctBtn.classList.remove("opacity-60", "grayscale-[0.5]");
        correctBtn.className = "bg-emerald-50 border-4 border-emerald-400 text-emerald-800 rounded-2xl px-4 py-3 text-lg font-black text-left flex items-center gap-3 shadow-sm opacity-100 animate-glow-pulse";
        correctBtn.innerHTML += " <span class='animate-pulse-soft ml-auto'>👈 এটা সঠিক!</span>";
    }
};

window.saveInputs = function() {
    const inputs = ['input-date-from', 'input-date-to', 'input-days', 'input-name', 'input-roll'];
    const data = {};
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) data[id] = el.value;
    });
    localStorage.setItem('appInputs', JSON.stringify(data));
};

window.loadPersistence = function() {
    // Load Checkboxes
    const subjects = ["bangla", "science", "english", "arabic", "math", "quran"];
    const progress = JSON.parse(localStorage.getItem('subjectProgress') || '{}');
    subjects.forEach(s => {
        if (progress[s]) {
            document.getElementById(`check-${s}`).checked = true;
        }
    });
    updateProgress(false); // Update chart without confetti

    // Load Inputs
    const inputs = JSON.parse(localStorage.getItem('appInputs') || '{}');
    for (const id in inputs) {
        const el = document.getElementById(id);
        if (el) el.value = inputs[id];
    }

    // Load MCQ States
    const mcqAnswers = JSON.parse(localStorage.getItem('mcqAnswers') || '{}');
    for (const qId in mcqAnswers) {
        const { selectedIdx, correctIdx } = mcqAnswers[qId];
        restoreMCQAnswer(qId, selectedIdx, correctIdx);
    }
};

function restoreMCQAnswer(qId, selectedIdx, correctIdx) {
    const btn = document.getElementById(`btn-${qId}-${selectedIdx}`);
    if (!btn) return;
    
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    buttons.forEach(b => {
        b.disabled = true;
        b.classList.add("opacity-60", "grayscale-[0.5]");
    });

    btn.classList.remove("opacity-60", "grayscale-[0.5]");
    if (selectedIdx === correctIdx) {
        btn.className = "bg-emerald-50 border-4 border-emerald-500 text-emerald-800 rounded-2xl px-4 py-3 text-lg font-black text-left flex items-center gap-3 shadow-lg scale-105 transition-all";
        btn.innerHTML += " <span class='text-2xl'>✅</span>";
    } else {
        btn.className = "bg-rose-50 border-4 border-rose-500 text-rose-800 rounded-2xl px-4 py-3 text-lg font-black text-left flex items-center gap-3 shadow-md";
        btn.innerHTML += " <span class='text-2xl'>❌</span>";
        let correctBtn = document.getElementById(`btn-${qId}-${correctIdx}`);
        if (correctBtn) {
            correctBtn.classList.remove("opacity-60", "grayscale-[0.5]");
            correctBtn.className = "bg-emerald-50 border-4 border-emerald-400 text-emerald-800 rounded-2xl px-4 py-3 text-lg font-black text-left flex items-center gap-3 shadow-sm opacity-100";
        }
    }
}

window.clearHistory = function() {
    if (confirm("আপনি কি নিশ্চিত যে আপনি সমস্ত অগ্রগতির তথ্য মুছে ফেলতে চান?")) {
        localStorage.clear();
        location.reload();
    }
};

window.toggleFullscreen = function() {
    const icon = document.getElementById('fs-icon');
    const text = document.getElementById('fs-text');

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            document.body.classList.add('is-fullscreen');
            if (icon) icon.innerText = '❐'; 
            if (text) text.innerText = 'ছোট করুন';
        }).catch(err => {
            console.error(`Error: ${err.message}`);
        });
    } else {
        document.exitFullscreen().then(() => {
            document.body.classList.remove('is-fullscreen');
            if (icon) icon.innerText = '⛶';
            if (text) text.innerText = 'পুরো স্ক্রিন';
        });
    }
};

// Handle escape key or other ways of exiting fullscreen
document.addEventListener('fullscreenchange', () => {
    const icon = document.getElementById('fs-icon');
    const text = document.getElementById('fs-text');
    if (!document.fullscreenElement) {
        document.body.classList.remove('is-fullscreen');
        if (icon) icon.innerText = '⛶';
        if (text) text.innerText = 'পুরো স্ক্রিন';
    } else {
        document.body.classList.add('is-fullscreen');
        if (icon) icon.innerText = '❐';
        if (text) text.innerText = 'ছোট করুন';
    }
});

// Add interactivity to sidebar buttons
function enhanceSidebarInteractivity() {
    const buttons = document.querySelectorAll('.tab-base, #fullscreen-btn, button[onclick^="clearHistory"]');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => btn.classList.add('scale-90'));
        btn.addEventListener('mouseup', () => btn.classList.remove('scale-90'));
        btn.addEventListener('mouseleave', () => btn.classList.remove('scale-90'));
    });
}

window.toggleSidebar = function() {
    const sidebar = document.getElementById('main-sidebar');
    const content = document.getElementById('content-container');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const icon = document.getElementById('toggle-icon');

    const isHidden = sidebar.classList.toggle('sidebar-hidden');
    content.classList.toggle('content-expanded');

    if (isHidden) {
        icon.innerText = '▶';
        toggleBtn.style.left = '1rem';
    } else {
        icon.innerText = '◀';
        toggleBtn.style.left = 'calc(80px + 1rem)';
    }
};

// Update updateProgress to save state
window.updateProgress = function (triggerConfetti = true) {
    const subjects = ["bangla", "science", "english", "arabic", "math", "quran"];
    let done = 0;
    const progress = {};
    subjects.forEach((s) => {
        const isChecked = document.getElementById(`check-${s}`).checked;
        if (isChecked) {
            done++;
            progress[s] = true;
        } else {
            progress[s] = false;
        }
    });
    
    localStorage.setItem('subjectProgress', JSON.stringify(progress));

    const pct = Math.round((done / subjects.length) * 100);
    let color = "#6366f1"; // Primary
    
    if (pct === 100) {
        color = "#10b981"; // Success
        if (triggerConfetti) {
            for(let i=0; i<6; i++) setTimeout(() => createConfetti(60), i * 300);
        }
    } else if (pct >= 50) color = "#8b5cf6"; // Violet
    else if (pct > 0) color = "#f59e0b"; // Accent
    
    if (currentState.chartInstance) {
        currentState.chartInstance.data.datasets[0].data = [100 - pct, pct];
        currentState.chartInstance.data.datasets[0].backgroundColor = ["#f1f5f9", color];
        currentState.chartInstance.update();
    }
};

window.onload = () => {
    renderScience();
    renderEnglish();
    renderArabicTable();
    renderMath();
    initChart();
    switchTab("bangla");
    
    // Load persisted data
    setTimeout(loadPersistence, 100);
};