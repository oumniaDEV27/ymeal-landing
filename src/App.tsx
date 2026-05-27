import { useEffect, useState } from 'react';
import headerSvg from './assets/svg/header.svg';

import inventaireIcon from './assets/svg/inventaire.svg';
import budgetIcon from './assets/svg/budgetmaitrise.svg';
import localIcon from './assets/svg/bonplanlocaux.svg';
import commuIcon from './assets/svg/communaute.svg';
import imgFrigo from './assets/img/frigo.png';
import imgSupermarche from './assets/img/supermarche.png';
import imgSalade from './assets/img/salade.jpg';
import imgRecette from './assets/img/recette.png';
import imgBudget from './assets/img/budget.png';
import imgCommunaute from './assets/img/communaute.png';
import imgImage from './assets/img/image.png';
// ---- DATA ----
// const stats = [
//   { value: '10K+', label: 'Étudiants' },
//   { value: '500+', label: 'Recettes' },
//   { value: '150€', label: 'Économisés/mois' },
// ];

const features = [
  {
    icon: inventaireIcon,
    title: 'Inventaire intelligent',
    desc: "Suis tes ingrédients et évite le gaspillage avec des recettes adaptées à ce que tu as déjà.",
  },
  {
    icon: budgetIcon,
    title: 'Budget maîtrisé',
    desc: "Des recettes adaptées à ton budget, de 2€ à 5€ par repas.",
  },
  {
    icon: localIcon,
    title: 'Bons plans locaux',
    desc: "Trouve les meilleures promos près de chez toi et fais des économies intelligentes.",
  },
  {
    icon: commuIcon,
    title: 'Communauté',
    desc: "Partage et découvre les recettes étudiantes préférées de ta région.",
  },
];

// const whyItems = [
//   { icon: '✓', text: 'Génération automatique selon ton frigo' },
//   { icon: '✓', text: 'Recettes super-marchés géolocalisés' },
//   { icon: '✓', text: 'Recettes catégories et régime alimentaire' },
//   { icon: '✓', text: 'Partage et note tes recettes' },
//   { icon: '✓', text: 'Aide budget et anti-gaspi' },
//   { icon: '✓', text: 'Communauté étudiants active' },
// ];

// const testimonials = [
//   {
//     avatar: '🥦',
//     text: "Grâce à Ymeal j'économise 90€ par mois ! Les recettes sont délicieuses et super rapides.",
//     name: 'Étudiant en médecine',
//     color: '#FFD625',
//   },
//   {
//     avatar: '🍊',
//     text: "Trop les gâteaux les plans ! J'ai plein de nouvelles recettes variées adaptées à mon petit budget.",
//     name: 'Étudiant en informatique',
//     color: '#DFBCDA',
//   },
//   {
//     avatar: '🍆',
//     text: "Trop bons plans près de chez moi ! J'ai des courses impossibles. Je fais mes courses intelligemment maintenant !",
//     name: 'Étudiant en droit',
//     color: '#A0D4A0',
//   },
// ];

// ---- COMPONENTS ----

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: '1.4rem', color: scrolled ? '#1a1a1a' : '#fff', textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.3)' }}>
        Ymeal
      </span>
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {['Fonctionnalités', 'Pourquoi', 'Avis'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              textDecoration: 'none',
              color: scrolled ? '#444' : 'rgba(255,255,255,0.9)',
              fontSize: '0.85rem',
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              transition: 'color 0.2s',
            }}
          >
            {item}
          </a>
        ))}
        <a
          href="#cta"
          style={{
            background: '#1a1a1a',
            color: '#FFD625',
            padding: '0.45rem 1.1rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.02em',
          }}
        >
          Commencer
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '520px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* SVG héro pleine largeur */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
<img
  src={headerSvg}
  alt="Ymeal hero"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'left center',
    display: 'block',
  }}
/>
      </div>

      {/* Texte hero par-dessus */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '0 5vw',
          maxWidth: '520px',
          marginTop: '40px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '999px',
            padding: '0.25rem 0.9rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            color: '#4a1e00',
            marginBottom: '0.75rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          🎓 Carte Étudiant acceptée
        </div>
        <h1
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            lineHeight: 1.05,
            color: '#1a0a00',
            margin: '0 0 0.75rem',
          }}
        >
          Welcome to
          <br />
          Ymeal !
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9rem',
            color: '#3d1a00',
            lineHeight: 1.5,
            margin: '0 0 1.1rem',
            maxWidth: '380px',
          }}
        >
          L'application qui transforme ton budget étudiant en repas savoureux. Des recettes adaptatives, des bons plans près de chez toi, et une communauté pour partager.
        </p>
        <a
          href="#cta"
          style={{
            display: 'inline-block',
            background: '#1a0a00',
            color: '#FFD625',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: '0.9rem',
            padding: '0.7rem 1.6rem',
            borderRadius: '999px',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'translateY(0)'; (e.target as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)'; }}
        >
          Commencer gratuitement →
        </a>
      </div>
    </section>
  );
}

// function StatsBar() {
//   return (
//     <section
//       style={{
//         background: '#fff',
//         padding: '2.5rem 2rem',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: 'clamp(2rem, 6vw, 8rem)',
//       }}
//     >
//       {stats.map(({ value, label }) => (
//         <div key={label} style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               fontFamily: "'Fredoka One', cursive",
//               fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
//               color: '#D67628',
//               lineHeight: 1,
//             }}
//           >
//             {value}
//           </div>
//           <div
//             style={{
//               fontFamily: "'DM Sans', sans-serif",
//               fontSize: '0.8rem',
//               color: '#888',
//               marginTop: '0.3rem',
//               letterSpacing: '0.03em',
//             }}
//           >
//             {label}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

function FeaturesSection() {
  return (
    <section
      id="fonctionnalités"
      style={{
        background: '#FAFAF7',
        padding: '5rem 2rem',
        textAlign: 'center',
      }}
    >
      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem',
          color: '#D67628',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 700,
          marginBottom: '0.8rem',
        }}
      >
        Tout ce dont tu as besoin
      </p>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          color: '#1a1a1a',
          marginBottom: '0.6rem',
        }}
      >
        Une app complète pour cuisiner malin
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#666',
          fontSize: '0.92rem',
          marginBottom: '3rem',
        }}
      >
        Une app complète pour cuisiner malin avec un budget étudiant
      </p>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            style={{
              background: '#fff',
              borderRadius: '24px',
              overflow: 'visible',
              boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
              textAlign: 'left',
              transition: 'all 0.25s ease',
              cursor: 'default',
              minHeight: '240px',
display: 'flex',
flexDirection: 'column',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                'translateY(-4px)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 10px 24px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 4px 18px rgba(0,0,0,0.04)';
            }}
          >
            {/* Top green area */}
            <div
              style={{
              background: '#DDE58B',
              padding: '1rem',
              height: '120px',
              }}
            >
              {/* Icon bubble */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '18px',
                  background:
                    'linear-gradient(135deg, #F7D941 0%, #E58C2F 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 12px rgba(229,140,47,0.25)',
                }}
              >
                <img
  src={icon}
  alt={title}
  style={{
    width: '28px',
    height: '28px',
    objectFit: 'contain',
  }}
/>
              </div>
            </div>

<div
style={{
  background: '#fff',
  padding: '1.3rem 1.2rem 1.5rem',

  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',

  position: 'relative',
  zIndex: 2,

  flex: 1,
}}
>
              <h3
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: '1.05rem',
                  color: '#1a1a1a',
                  marginBottom: '0.7rem',
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.84rem',
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  const cards = [
    {
      image: imgFrigo,
      text: 'Génération automatique selon ton frigo',
    },
    {
      image: imgSupermarche,
      text: 'Bons plans supermarchés géolocalisés',
    },
    {
      image: imgSalade,
      text: 'Recettes adaptées à ton régime alimentaire',
      large: true,
    },
    {
      image: imgRecette,
      text: 'Partage et note tes recettes',
    },
    {
      image: imgBudget,
      text: 'Astuces budget et anti-gaspi',
    },
    {
      image: imgCommunaute,
      text: 'Communauté étudiante active',
    },
  ];

  return (
    <section
      id="pourquoi"
      style={{
        background: '#F7F2EB',
        padding: '4rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1rem',
          }}
        >
          {/* LEFT TEXT CARD */}
          <div
            style={{
              gridColumn: 'span 6',
              background:
                'linear-gradient(135deg, #F6D44B 0%, #E58C2F 100%)',
              borderRadius: '18px',
              padding: '2rem',
              minHeight: '210px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '2rem',
                color: '#fff',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}
            >
              Pourquoi choisir Ymeal ?
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#fff',
                lineHeight: 1.7,
                fontSize: '1rem',
                maxWidth: '450px',
                fontWeight: 500,
              }}
            >
              On sait que la vie étudiante c'est serré côté budget.
              Ymeal t'aide à manger mieux pour moins cher, sans stress.
            </p>
          </div>

          {/* BIG IMAGE */}
          <div
            style={{
              gridColumn: 'span 6',
              borderRadius: '18px',
              overflow: 'hidden',
              minHeight: '210px',
            }}
          >
            <img
              src={imgImage}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* SMALL CARDS */}
          {cards.slice(0, 2).map((card) => (
            <div
              key={card.text}
              style={{
                gridColumn: 'span 3',
                background: '#fff',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src={card.image}
                alt=""
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover',
                }}
              />

              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.82rem',
                  color: '#444',
                  lineHeight: 1.4,
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#31B24C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '0.7rem',
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>

                {card.text}
              </div>
            </div>
          ))}

          {/* LARGE CARD */}
          <div
            style={{
              gridColumn: 'span 6',
              background: '#fff',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            }}
          >
            <img
              src={imgSalade}
              alt=""
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }}
            />

            <div
              style={{
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.82rem',
                color: '#444',
              }}
            >
              <span
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#31B24C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '0.7rem',
                }}
              >
                ✓
              </span>

              Recettes adaptées à ton régime alimentaire
            </div>
          </div>

          {/* BOTTOM CARDS */}
          {cards.slice(3).map((card) => (
            <div
              key={card.text}
              style={{
                gridColumn: 'span 4',
                background: '#fff',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src={card.image}
                alt=""
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover',
                }}
              />

              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.82rem',
                  color: '#444',
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#31B24C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '0.7rem',
                  }}
                >
                  ✓
                </span>

                {card.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// function TestimonialsSection() {
//   return (
//     <section
//       id="avis"
//       style={{
//         background: '#FAFAF7',
//         padding: '4rem 2rem',
//         textAlign: 'center',
//       }}
//     >
//       <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: '#D67628', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 0.6rem' }}>
//         Ce qu'ils en disent
//       </p>
//       <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1a1a1a', margin: '0 0 2.5rem' }}>
//         Des milliers d'étudiants nous font confiance
//       </h2>
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//           gap: '1.2rem',
//           maxWidth: '860px',
//           margin: '0 auto',
//         }}
//       >
//         {testimonials.map(({ avatar, text, name, color }) => (
//           <div
//             key={name}
//             style={{
//               background: '#fff',
//               borderRadius: '22px',
//               padding: '1.5rem',
//               textAlign: 'left',
//               boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
//               border: '1px solid rgba(0,0,0,0.05)',
//               position: 'relative',
//             }}
//           >
//             <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{avatar}</div>
//             <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.83rem', color: '#444', lineHeight: 1.55, margin: '0 0 1rem' }}>
//               "{text}"
//             </p>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//               <div
//                 style={{
//                   width: '8px',
//                   height: '8px',
//                   borderRadius: '50%',
//                   background: color,
//                 }}
//               />
//               <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#999', fontWeight: 600 }}>
//                 {name}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function CTASection() {
//   return (
//     <section
//       id="cta"
//       style={{
//         background: 'linear-gradient(135deg, #FBDE49 0%, #D67628 100%)',
//         padding: '5rem 2rem',
//         textAlign: 'center',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Decorative pattern */}
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           opacity: 0.06,
//           backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
//           backgroundSize: '24px 24px',
//         }}
//       />
//       <div style={{ position: 'relative', zIndex: 1 }}>
//         <h2
//           style={{
//             fontFamily: "'Fredoka One', cursive",
//             fontSize: 'clamp(1.8rem, 4vw, 3rem)',
//             color: '#1a0a00',
//             margin: '0 0 0.75rem',
//             lineHeight: 1.1,
//           }}
//         >
//           Prêt à mieux manger pour moins cher ?
//         </h2>
//         <p
//           style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: '1rem',
//             color: '#3d1a00',
//             margin: '0 0 2rem',
//           }}
//         >
//           Rejoins des milliers d'étudiants qui cuisinent malin avec Ymeal
//         </p>
//         <a
//           href="#"
//           style={{
//             display: 'inline-block',
//             background: '#1a0a00',
//             color: '#FFD625',
//             fontFamily: "'DM Sans', sans-serif",
//             fontWeight: 700,
//             fontSize: '1rem',
//             padding: '0.85rem 2rem',
//             borderRadius: '999px',
//             textDecoration: 'none',
//             boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
//             transition: 'transform 0.2s, box-shadow 0.2s',
//           }}
//           onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.35)'; }}
//           onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'translateY(0)'; (e.target as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)'; }}
//         >
//           Commencer gratuitement →
//         </a>
//         <p
//           style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: '0.78rem',
//             color: 'rgba(61,26,0,0.6)',
//             marginTop: '1rem',
//           }}
//         >
//           Aucune carte bancaire requise · Inscription en 2 minutes
//         </p>
//       </div>
//     </section>
//   );
// }

function CTASection() {
  return (
    <section
      id="cta"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '520px',
      }}
    >
      {/* BACKGROUND SVG */}
      <img
        src={headerSvg}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '520px',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          textAlign: 'center',

          padding: '2rem',

          background:
            'linear-gradient(rgba(255,215,70,0.68), rgba(229,140,47,0.52))',
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: '#16110F',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            maxWidth: '1000px',
          }}
        >
          Prêt à mieux manger
          <br />
          pour moins cher ?
        </h2>

        {/* SUBTITLE */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.7rem)',
            fontWeight: 700,
            color: '#16110F',
            maxWidth: '900px',
            marginBottom: '2.5rem',
            lineHeight: 1.4,
          }}
        >
          Rejoins des milliers d'étudiants qui cuisinent malin avec
          Ymeal
        </p>

        {/* BUTTON */}
        <button
          onClick={() => {
            alert('Inscription bientôt disponible 🚀');
          }}
          style={{
            background: '#16110F',
            color: '#fff',

            border: 'none',
            borderRadius: '999px',

            padding: '1.2rem 2.6rem',

            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 700,

            display: 'flex',
            alignItems: 'center',
            gap: '1rem',

            cursor: 'pointer',

            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow =
              '0 16px 40px rgba(0,0,0,0.28)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow =
              '0 10px 30px rgba(0,0,0,0.2)';
          }}
        >
          Commence gratuitement

          <span style={{ fontSize: '1.5rem' }}>→</span>
        </button>

        {/* FOOT TEXT */}
        <p
          style={{
            marginTop: '1.5rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#16110F',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}
        >
          Aucune carte bancaire requise • Inscription en 2 minutes
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: '#1a0a00',
        color: 'rgba(255,255,255,0.5)',
        padding: '1.5rem 2rem',
        textAlign: 'center',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.78rem',
      }}
    >
      © 2026 Ymeal · Fait par des étudiants pour les étudiants
    </footer>
  );
}

// ---- APP ----
export default function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #fff; }
      `}</style>

      <Header />
      <main>
        <HeroSection />
        {/* <StatsBar /> */}
        <FeaturesSection />
        <WhySection />
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
