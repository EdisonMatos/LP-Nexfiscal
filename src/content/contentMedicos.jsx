import bgImg from "../assets/imgs/hero/bgHeroMedicos.webp";
import logo from "../assets/imgs/logo/logo.png";
import { infos } from "./content";

const currentYear = new Date().getFullYear();

const contentMedicos = {
  infos: {
    name: "A Definir",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Atenção, <span className="text-lpTitle">Doutor</span>! Você pode estar
          <span className="text-lpTitle"> pagando mais tributos</span> do que
          deveria!
        </h1>
      ),
      subtitle:
        "Você sabia que médicos com múltiplos vínculos podem ter direito à restituição de valores pagos acima do teto previdenciário? Faça uma análise gratuita com especialistas em soluções tributárias.",
      buttonLabel: "Quero falar com um especialista",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "QUEM TEM DIREITO",
      title: "Entenda quem são os profissionais enquadrados",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-network"
          >
            <rect x="16" y="16" width="6" height="6" rx="1" />
            <rect x="2" y="16" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
            <path d="M12 12V8" />
          </svg>
        ),
        title: "Médicos com múltiplos vínculos empregatícios",
        description:
          "Médicos que atuam em diferentes instituições, como hospitais, clínicas e consultórios, podem acabar pagando mais contribuições para o INSS do que o necessário. Isso ocorre porque cada vínculo empregatício é tratado separadamente, o que pode fazer com que o valor total de contribuição ultrapasse o teto do INSS. Se você é médico e tem múltiplos vínculos, há uma boa chance de que você tenha direito a solicitar a restituição dos valores pagos a mais.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-hand-coins"
          >
            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 16 6 6" />
            <circle cx="16" cy="9" r="2.9" />
            <circle cx="6" cy="5" r="3" />
          </svg>
        ),
        title: "Contribuintes que excederam o teto do INSS em um ou mais anos",
        description:
          "Se você teve várias fontes de renda ao longo dos anos, pode ter contribuído mais do que o limite estabelecido pelo INSS. Isso acontece quando o valor total das contribuições de diferentes empregos ou atividades supera o teto máximo permitido pela previdência. Se você ultrapassou esse limite em um ou mais anos, pode ser elegível para a devolução dos valores pagos a mais, e o processo de restituição pode ser feito para corrigir esse erro e recuperar o que foi pago a mais.",
      },
      card3: {
        icon: "A Definir",
        title: "A Definir",
        description: "A Definir",
      },
      card4: {
        icon: "A Definir",
        title: "A Definir",
        description: "A Definir",
      },
    },
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "EXPERTISE EM RESTITUIÇÃO TRIBUTÁRIA",
      title: "Especialistas em Restituição de INSS: Rapidez e Confiança",
    },
    paragraph: (
      <p>
        Com anos de experiência, nossa equipe é especializada em soluções
        tributárias, focada em identificar e recuperar valores pagos a mais no
        INSS. <br />
        <br /> Sabemos que cada caso é único e exige uma análise minuciosa. Por
        isso, oferecemos um serviço completo, desde a avaliação inicial até a
        resolução de pendências tributárias. Conte conosco para garantir que
        você aproveite todos os seus direitos, com rapidez, segurança e total
        confiança.
      </p>
    ),
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A MELHOR ESCOLHA",
      title: "Por que escolher a NexFiscal?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-search"
          >
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
            <path d="m9 18-1.5-1.5" />
            <circle cx="5" cy="14" r="3" />
          </svg>
        ),
        title: "Análise Gratuita",
        description:
          "Entenda seu direito sem compromisso. Faça uma análise simples e sem custos para saber se você tem direito à restituição de valores pagos a mais no INSS.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-thumbs-up"
          >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
        ),
        title: "Processo Administrativo via PER/DCOMP",
        description:
          "Mais ágil que outras alternativas. O uso do PER/DCOMP facilita o processo de restituição, tornando-o mais rápido e eficiente para você.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-check"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
          </svg>
        ),
        title: "Equipe Especializada",
        description:
          "Profissionais focados em soluções tributárias. Nossa equipe é especializada em resolver questões relacionadas ao INSS e garantir que seus direitos sejam respeitados.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-calendar-check"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="m9 16 2 2 4-4" />
          </svg>
        ),
        title: "Prevenção Futura",
        description:
          "Gestão personalizada para evitar contribuições excedentes. Oferecemos suporte para garantir que você não pague mais do que o necessário no futuro.",
      },
    },
  },
  steps: {
    sectionHeader: {
      miniTag: "Passo a Passo",
      title: "Como recuperar suas contribuições excedentes?",
      subtitle: "Com apenas alguns passos, o seu problema está resolvido",
    },
    cards: {
      card1: {
        number: 1,
        title: "Solicite uma análise gratuita",
        description:
          "Fale conosco e nos informe seu Nome, CPF e número de vínculos.",
      },
      card2: {
        number: 2,
        title: "Receba um diagnóstico personalizado",
        description: "Identificamos valores passíveis de restituição",
      },
      card3: {
        number: 3,
        title: "Recupere seu dinheiro",
        description:
          "Conduzimos o processo administrativo com total transparência",
      },
    },
    ctaButtonLabel: "Solicitar análise gratuita agora!",
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA MAIS TEMPO",
      title: "Pare de perder dinheiro e maximize seu potencial financeiro",
      subtitle: (
        <p>
          Ao deixar de solicitar a restituição, você está deixando valores
          significativos para trás. Veja como isso impacta num exemplo real:{" "}
          <br />
          <br /> Um médico com três empregos, contribuindo R$500 acima do teto
          por mês, pode recuperar mais de R$6.000 por ano.
        </p>
      ),
    },
    buttonLabel: "Saiba Quanto Você Pode Recuperar!",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentMedicos;
