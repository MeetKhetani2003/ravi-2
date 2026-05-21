const fs = require('fs');

const file = '/home/meet/Downloads/ravi2/src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Extract HEALTHCARE PARTNERS
const hpStart = content.indexOf('      {/* ========= HEALTHCARE PARTNERS ========= */}');
const wcuStart = content.indexOf('      {/* ========= WHY CHOOSE US ========= */}');
const healthcarePartnersBlock = content.slice(hpStart, wcuStart);
content = content.slice(0, hpStart) + content.slice(wcuStart);

// 2. Insert HEALTHCARE PARTNERS after DOCTORS PREVIEW
const testimonialsStart = content.indexOf('      {/* ========= TESTIMONIALS ========= */}');
content = content.slice(0, testimonialsStart) + healthcarePartnersBlock + content.slice(testimonialsStart);

// 3. Add refs and state inside Home component
const homeStart = content.indexOf('export default function Home() {');
const endOfHomeStart = content.indexOf('const [currentImage, setCurrentImage] = useState(0);') + 'const [currentImage, setCurrentImage] = useState(0);'.length;

const stateCode = `
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);
  const partnersScrollRef = useRef<HTMLDivElement>(null);

  const scrollPartners = (direction: 'left' | 'right') => {
    if (partnersScrollRef.current) {
      const { scrollLeft, clientWidth } = partnersScrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      partnersScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollToTestimonial = (index: number) => {
    if (testimonialsScrollRef.current) {
      const container = testimonialsScrollRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({ left: child.offsetLeft - container.offsetLeft, behavior: 'smooth' });
      }
    }
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = (prev + 1) % RAW_TESTIMONIALS.length;
        if (testimonialsScrollRef.current) {
          const container = testimonialsScrollRef.current;
          const child = container.children[next] as HTMLElement;
          if (child) {
            container.scrollTo({ left: child.offsetLeft - container.offsetLeft, behavior: 'smooth' });
          }
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);
`;

content = content.slice(0, endOfHomeStart) + stateCode + content.slice(endOfHomeStart);

// 4. Update the actual JSX elements with refs and onClick handlers
content = content.replace(
  '<div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 scroll-smooth">',
  '<div ref={partnersScrollRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 scroll-smooth">'
);

content = content.replace(
  '<button className="w-12 h-12 rounded-full border border-blush-100 bg-white flex items-center justify-center text-ink-400 hover:border-blush-500 hover:text-blush-500 transition-all shadow-sm active:scale-95">\n                <ChevronLeft size={24} />\n              </button>',
  '<button onClick={() => scrollPartners(\'left\')} className="w-12 h-12 rounded-full border border-blush-100 bg-white flex items-center justify-center text-ink-400 hover:border-blush-500 hover:text-blush-500 transition-all shadow-sm active:scale-95">\n                <ChevronLeft size={24} />\n              </button>'
);

content = content.replace(
  '<button className="w-12 h-12 rounded-full border border-blush-100 bg-white flex items-center justify-center text-ink-400 hover:border-blush-500 hover:text-blush-500 transition-all shadow-sm active:scale-95">\n                <ChevronRight size={24} />\n              </button>',
  '<button onClick={() => scrollPartners(\'right\')} className="w-12 h-12 rounded-full border border-blush-100 bg-white flex items-center justify-center text-ink-400 hover:border-blush-500 hover:text-blush-500 transition-all shadow-sm active:scale-95">\n                <ChevronRight size={24} />\n              </button>'
);

content = content.replace(
  '<div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 lg:px-0 lg:flex-row flex-nowrap">',
  '<div ref={testimonialsScrollRef} className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 lg:px-0 lg:flex-row flex-nowrap">'
);

content = content.replace(
  '<button className="hidden lg:flex w-14 h-14 rounded-2xl bg-white border border-blush-100 items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-white transition-all shadow-sm">\n                <ChevronLeft size={28} />\n              </button>',
  '<button onClick={() => scrollToTestimonial((currentTestimonial - 1 + RAW_TESTIMONIALS.length) % RAW_TESTIMONIALS.length)} className="hidden lg:flex w-14 h-14 rounded-2xl bg-white border border-blush-100 items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-white transition-all shadow-sm">\n                <ChevronLeft size={28} />\n              </button>'
);

content = content.replace(
  '<button className="hidden lg:flex w-14 h-14 rounded-2xl bg-white border border-blush-100 items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-white transition-all shadow-sm">\n                <ChevronRight size={28} />\n              </button>',
  '<button onClick={() => scrollToTestimonial((currentTestimonial + 1) % RAW_TESTIMONIALS.length)} className="hidden lg:flex w-14 h-14 rounded-2xl bg-white border border-blush-100 items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-white transition-all shadow-sm">\n                <ChevronRight size={28} />\n              </button>'
);

content = content.replace(
  /{RAW_TESTIMONIALS\.map\(\(\_, idx\) => \(\n\s*<button key=\{idx\} className=\{`h-2 rounded-full transition-all duration-500 \$\{idx === 0 \? 'w-8 sm:w-10 bg-blush-500' : 'w-2 sm:w-2.5 bg-blush-200'\}`\} \/>\n\s*\)\)}/g,
  `{RAW_TESTIMONIALS.map((_, idx) => (
                  <button key={idx} onClick={() => scrollToTestimonial(idx)} className={\`h-2 rounded-full transition-all duration-500 \${idx === currentTestimonial ? 'w-8 sm:w-10 bg-blush-500' : 'w-2 sm:w-2.5 bg-blush-200'}\`} />
                ))}`
);


fs.writeFileSync(file, content);
console.log('Update complete.');
