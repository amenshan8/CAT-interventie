const slides = [
    {
        id: 1,
        title: "De rol van heupversterking in het functioneel herstel van patellofemoraal pijnsyndroom bij vrouwen",
        content: `
            <div class="mt-8">
                <p class="text-blue-400 font-semibold mb-2">Door:</p>
                <ul class="space-y-1 text-xl opacity-90">
                    <li>Jessica Foolen</li>
                    <li>Sanne van Gameren</li>
                    <li>Sija van den Heuvel</li>
                    <li>Yasmijn Schaak</li>
                </ul>
            </div>
        `,
        image: "title_slide.png",
        bg: "title_slide.png"
    },
    {
        id: 2,
        title: "Klinisch Scenario",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div class="space-y-4">
                    <div>
                        <h4 class="text-blue-400 font-bold uppercase text-sm tracking-widest">Patiënt</h4>
                        <p class="text-lg">22-jarige recreatieve hardloopster</p>
                    </div>
                    <div>
                        <h4 class="text-blue-400 font-bold uppercase text-sm tracking-widest">Belasting</h4>
                        <p class="text-lg">3× per week hardlopen (Marathonvoorbereiding)</p>
                    </div>
                    <div>
                        <h4 class="text-blue-400 font-bold uppercase text-sm tracking-widest">Klachten</h4>
                        <p class="text-lg">Anterieure kniepijn rechts (1 maand)</p>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="bg-blue-900/30 p-4 rounded-lg border border-blue-500/20">
                        <h4 class="text-blue-400 font-bold uppercase text-sm tracking-widest">Diagnose</h4>
                        <p class="text-xl font-semibold">Patellofemoraal pijnsyndroom</p>
                    </div>
                    <div>
                        <h4 class="text-blue-400 font-bold uppercase text-sm tracking-widest">Klinisch dilemma</h4>
                        <p class="italic text-lg">Heupgerichte vs. Quadricepsgerichte oefentherapie</p>
                    </div>
                </div>
            </div>
        `,
        image: "scenario_runner.png",
        bg: "scenario_runner.png"
    },
    {
        id: 3,
        title: "Klinische Vraag",
        content: `
            <div class="bg-white/5 p-8 rounded-2xl border border-white/10 mt-6 shadow-2xl">
                <p class="text-2xl leading-relaxed italic text-center text-blue-100">
                    "Leidt een oefenprogramma gericht op heupversterkende oefeningen tot meer functionele verbetering dan een oefenprogramma gericht op quadricepsversterkende oefeningen, bij een recreatieve vrouwelijke hardloopster van 22 jaar met patellofemoraal pijnsyndroom?"
                </p>
            </div>
        `,
        image: "hip_vs_quad.png",
        bg: "hip_vs_quad.png"
    },
    {
        id: 4,
        title: "PICO",
        content: `
            <div class="grid grid-cols-1 gap-4 mt-6">
                <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl">
                    <span class="text-4xl font-bold text-blue-500 w-12">P</span>
                    <div>
                        <span class="text-sm text-gray-400 uppercase">Patient</span>
                        <p class="text-lg font-medium">Recreatieve vrouwelijke hardloopster (22 jaar) met PFPS</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl">
                    <span class="text-4xl font-bold text-blue-500 w-12">I</span>
                    <div>
                        <span class="text-sm text-gray-400 uppercase">Intervention</span>
                        <p class="text-lg font-medium">Heupversterkende oefeningen</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl">
                    <span class="text-4xl font-bold text-blue-500 w-12">C</span>
                    <div>
                        <span class="text-sm text-gray-400 uppercase">Comparison</span>
                        <p class="text-lg font-medium">Quadricepsversterkende oefeningen</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl">
                    <span class="text-4xl font-bold text-blue-500 w-12">O</span>
                    <div>
                        <span class="text-sm text-gray-400 uppercase">Outcome</span>
                        <p class="text-lg font-medium">Functionele verbetering (Anterior Knee Pain Scale - AKPS)</p>
                    </div>
                </div>
            </div>
        `,
        image: "pico_diagram.png",
        bg: "title_slide.png"
    },
    {
        id: 5,
        title: "Zoekstring",
        content: `
            <div class="font-mono text-sm bg-black/40 p-6 rounded-lg border border-white/10 mt-6 leading-relaxed">
                <p><span class="text-blue-400">("Patellofemoral Pain Syndrome" OR "patellofemoral pain" OR "anterior knee pain")</span></p>
                <p class="my-2 font-bold text-white">AND</p>
                <p><span class="text-green-400">("hip strengthening" OR "hip muscle strengthening" OR "hip exercise" OR "lower limb strengthening")</span></p>
                <p class="my-2 font-bold text-white">AND</p>
                <p><span class="text-yellow-400">("quadriceps" OR "quadriceps strengthening" OR "knee strengthening" OR "knee exercise")</span></p>
                <p class="my-2 font-bold text-white">AND</p>
                <p><span class="text-purple-400">("functional outcome" OR "function" OR "knee function" OR "Anterior Knee Pain Scale" OR "AKPS")</span></p>
            </div>
        `,
        image: "search_strategy.png",
        bg: "search_strategy.png"
    },
    {
        id: 6,
        title: "In- en exclusiecriteria",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                    <h4 class="text-green-400 font-bold mb-4 flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Inclusiecriteria
                    </h4>
                    <ul class="space-y-2 opacity-90">
                        <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Vrouwen</li>
                        <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Leeftijd 18–28 jaar</li>
                        <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Diagnose PFPS</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-red-400 font-bold mb-4 flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Exclusiecriteria
                    </h4>
                    <ul class="space-y-2 opacity-90">
                        <li class="flex items-center"><span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> Andere kniepathologie</li>
                        <li class="flex items-center"><span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> Chirurgische voorgeschiedenis</li>
                        <li class="flex items-center"><span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> Neurologische aandoeningen</li>
                    </ul>
                </div>
            </div>
        `,
        image: null,
        bg: "search_strategy.png"
    },
    {
        id: 7,
        title: "Flowchart Selectie",
        content: `
            <div class="flex flex-col items-center mt-6 space-y-4">
                <div class="w-full max-w-md bg-blue-600/20 border border-blue-500/50 p-3 rounded text-center">Onderzoekspopulatie (Database Search)</div>
                <div class="w-0.5 h-6 bg-blue-500"></div>
                <div class="w-full max-w-md bg-blue-600/20 border border-blue-500/50 p-3 rounded text-center">Screening (In/Exclusie criteria)</div>
                <div class="w-0.5 h-6 bg-blue-500"></div>
                <div class="w-full max-w-md bg-blue-600/20 border border-blue-500/50 p-3 rounded text-center">Randomisatie</div>
                <div class="w-0.5 h-6 bg-blue-500"></div>
                <div class="flex w-full max-w-lg justify-between gap-4">
                   <div class="flex-1 bg-green-600/30 border border-green-500 p-2 rounded text-sm text-center">Heup Interventie</div>
                   <div class="flex-1 bg-yellow-600/30 border border-yellow-500 p-2 rounded text-sm text-center">Quad Interventie</div>
                   <div class="flex-1 bg-gray-600/30 border border-gray-500 p-2 rounded text-sm text-center">Controle Groep</div>
                </div>
            </div>
        `,
        image: null,
        bg: "title_slide.png"
    },
    {
        id: 8,
        title: "Samenvatting Saad et al. (2018)",
        content: `
            <div class="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-blue-400 font-bold mb-1">Design</p>
                    <p>RCT, enkelblind</p>
                </div>
                <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-blue-400 font-bold mb-1">Populatie (n=40)</p>
                    <p>Vrouwen, 18–28 jaar, PFPS</p>
                </div>
                <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-blue-400 font-bold mb-1">Duur</p>
                    <p>8 weken, 2× per week</p>
                </div>
                <div class="bg-white/5 p-4 rounded-lg">
                    <p class="text-blue-400 font-bold mb-1">Uitkomstmaten</p>
                    <p>VAS, AKPS, Kracht, Kinematica</p>
                </div>
            </div>
        `,
        image: "research_summary.png",
        bg: "research_summary.png"
    },
    {
        id: 9,
        title: "Kritische Beoordeling",
        content: `
            <div class="mt-4 p-5 bg-green-900/20 border border-green-500/30 rounded-xl">
                <p class="mb-4 font-semibold text-green-300">Interne validiteit (RoB 2): <span class="bg-green-600 px-2 py-1 rounded text-white text-xs">GOED</span></p>
                <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div class="flex justify-between border-b border-white/5 pb-1"><span>Selectiebias</span> <span class="text-green-400">Laag</span></div>
                    <div class="flex justify-between border-b border-white/5 pb-1"><span>Performancebias</span> <span class="text-yellow-400">Beperkt</span></div>
                    <div class="flex justify-between border-b border-white/5 pb-1"><span>Analyse</span> <span class="text-blue-400">ITT</span></div>
                    <div class="flex justify-between border-b border-white/5 pb-1"><span>Uitval</span> <span class="text-green-400">Minimaal</span></div>
                    <div class="flex justify-between border-b border-white/5 pb-1"><span>Detectiebias</span> <span class="text-green-400">Laag</span></div>
                    <div class="flex justify-between border-b border-white/5 pb-1"><span>Rapportagebias</span> <span class="text-green-400">Geen</span></div>
                </div>
            </div>
        `,
        image: "quality_check.png",
        bg: "research_summary.png"
    },
    {
        id: 10,
        title: "Samenvatting van Bewijs",
        content: `
            <div class="flex flex-col items-center justify-center h-full mt-8">
                <div class="bg-white/5 p-12 rounded-full border-8 border-blue-500/30 text-center shadow-2xl animate__animated animate__pulse animate__infinite">
                    <p class="text-gray-400 text-sm uppercase tracking-tighter mb-2">Tussen-groep verschil post-interventie</p>
                    <h2 class="text-7xl font-black text-white">p = 0,79</h2>
                </div>
                <p class="mt-8 text-xl text-gray-300 italic text-center">"Geen statistisch significant verschil tussen heup- en quadricepsgroep"</p>
            </div>
        `,
        image: "statistics_graph.png",
        bg: "statistics_graph.png"
    },
    {
        id: 11,
        title: "Vertaling naar de praktijk",
        content: `
            <ul class="space-y-4 mt-6">
                <li class="flex items-start">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs">✓</span>
                    <p>Beide interventies verbeteren de functie (AKPS) effectief.</p>
                </li>
                <li class="flex items-start">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs">✓</span>
                    <p>Zeer goed generaliseerbaar naar onze patiënt (Lisa).</p>
                </li>
                <li class="flex items-start">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs">✓</span>
                    <p>Laagdrempelig en praktisch uitvoerbaar in de 1e lijn.</p>
                </li>
                <li class="flex items-start italic text-blue-300">
                    <span class="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-xs">!</span>
                    <p>Keuze kan afgestemd worden op voorkeur, doelen en belastbaarheid.</p>
                </li>
            </ul>
        `,
        image: "clinical_practice.png",
        bg: "clinical_practice.png"
    },
    {
        id: 12,
        title: "Clinical Bottom Line",
        content: `
            <div class="mt-8 p-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M12 2L1 12l1.41 1.41L12 3.83l9.59 9.58L23 12 12 2z"/></svg>
                </div>
                <p class="text-2xl font-semibold leading-relaxed relative z-10 text-center">
                    Bij een jonge vrouwelijke hardloopster met patellofemoraal pijnsyndroom zijn heup- en quadricepstrainingen even effectief.
                </p>
                <hr class="my-6 border-white/20">
                <p class="text-xl italic opacity-90 text-center relative z-10">
                    De keuze kan veilig afgestemd worden op voorkeur, doelen en belastbaarheid.
                </p>
            </div>
        `,
        image: "success_finish.png",
        bg: "success_finish.png"
    }
];

let currentSlideIndex = 0;

const slidesWrapper = document.getElementById('slides-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressDots = document.getElementById('progress-dots');
const slideNumber = document.getElementById('slide-number');
const currentBg = document.getElementById('current-bg');

function init() {
    renderSlide();
    createDots();
    updateControls();
}

function createDots() {
    progressDots.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentSlideIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentSlideIndex = i;
            renderSlide();
            updateControls();
        });
        progressDots.appendChild(dot);
    });
}

function updateControls() {
    prevBtn.disabled = currentSlideIndex === 0;
    slideNumber.textContent = `${String(currentSlideIndex + 1).padStart(2, '0')} / ${slides.length}`;
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
    });
}

async function renderSlide() {
    const slide = slides[currentSlideIndex];
    
    // Transition background
    currentBg.style.opacity = '0';
    setTimeout(() => {
        currentBg.src = slide.bg;
        currentBg.style.opacity = '0.2';
    }, 500);

    const isTitleSlide = slide.id === 1;
    const hasSideImage = !isTitleSlide && slide.image;
    
    slidesWrapper.innerHTML = `
        <div class="slide-content animate__animated animate__fadeIn">
            <div class="${isTitleSlide || !slide.image ? 'flex flex-col items-center text-center' : 'slide-grid'}">
                <div class="content-text w-full">
                    <h1 class="${isTitleSlide ? 'title-main mb-6' : 'text-4xl font-extrabold text-blue-500 mb-6'}">${slide.title}</h1>
                    <div class="text-lg text-gray-200 leading-relaxed">
                        ${slide.content}
                    </div>
                </div>
                ${hasSideImage ? `
                <div class="slide-image">
                    <img src="${slide.image}" alt="Slide Visual" class="animate__animated animate__zoomIn">
                </div>` : ''}
            </div>
        </div>
    `;
}

nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        renderSlide();
        updateControls();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide();
        updateControls();
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
});

init();
