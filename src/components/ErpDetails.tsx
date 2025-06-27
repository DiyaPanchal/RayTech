import '../css/erpdetails.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaCogs, FaCloud, FaUsers, FaChartBar, FaLock, FaDatabase, FaEye, FaMoneyBillWave, FaRocket, FaChartLine, FaUserTie, FaBuilding, FaHandshake, FaBoxes, FaFileInvoiceDollar, FaTruck, FaIndustry, FaSchool } from 'react-icons/fa';
import { LuUserCog, LuBuilding2, LuHandshake, LuBoxes, LuFileText, LuTruck, LuFactory, LuBookOpen } from 'react-icons/lu';
import KeyBenefits from './KeyBenefits';

const erpBenefits = [
  {
    icon: <FaDatabase />,
    title: 'Centralized Data Control',
    description: 'All your business data is managed in one secure, unified platform for better accuracy and access.'
  },
//   {
//     icon: <FaEye />,
//     title: 'Improved Workflow Visibility',
//     description: 'Gain real-time insights into every process and department, enabling smarter, faster decisions.'
//   },
  {
    icon: <FaMoneyBillWave />,
    title: 'Reduced Costs and Errors',
    description: 'Automation and integration minimize manual work, reduce errors, and lower operational costs.'
  },
  {
    icon: <FaRocket />,
    title: 'Faster ROI',
    description: 'Accelerate your return on investment with streamlined operations and rapid deployment.'
  },
  {
    icon: <FaChartLine />,
    title: 'Increased Productivity',
    description: 'Empower your teams to work more efficiently and collaboratively, boosting overall productivity.'
  }
];

const erpTechStack = [
  {
    category: 'Core Technologies',
    icons: [
      { name: 'NodeJS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
    ],
    items: ['NodeJS', 'ReactJS', 'MySQL', 'Firebase']
  },
  {
    category: 'Integrations',
    icons: [
      { name: 'REST API', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Cloud', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' }
    ],
    items: ['REST APIs', 'Cloud Services', 'Third-Party Integrations']
  },
  {
    category: 'Security',
    icons: [
      { name: 'Security', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
    ],
    items: ['Role-Based Access', 'Data Encryption', 'Audit Logs']
  }
];

const erpStepColors = [
  '#b3cfff', // light blue
  '#2563eb', // medium blue
  '#1e40af', // dark blue
  '#a7f3d0', // light green
  '#10b981', // medium green
  '#047857', // dark green
  '#e0c3fc', // light purple
  '#a259ec', // medium purple
  '#5f2c82', // dark purple
];

const erpModules = [
  {
    title: 'HR & Payroll',
    icon: <LuUserCog style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'Employee master records',
      'Attendance & biometric tracking',
      'Leave & shift management',
      'Payroll processing with tax compliance',
      'Work-from-home approvals',
      'Document storage & expiry reminders',
      'Employee referrals',
    ],
  },
  {
    title: 'Operations & Admin',
    icon: <LuBuilding2 style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'Meeting circulars',
      'Document sharing & discussion forms',
      'Complaint tracking',
      'Note reminders',
      'Idea box for suggestions',
      'Internal chat',
    ],
  },
  {
    title: 'Sales & CRM',
    icon: <LuHandshake style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'Daily Sales Reports (DSR)',
      'Live employee GPS tracking',
      'Customer tracking & deal pipeline',
      'Email/SMS campaign integrations',
      'Automated quote generation',
    ],
  },
  {
    title: 'Inventory & Logistics',
    icon: <LuBoxes style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'Stock movement (IN/OUT)',
      'Barcode scanning',
      'Batch & expiry management',
      'Auto reorder',
      'Dispatch control',
    ],
  },
  {
    title: 'Finance & Accounting',
    icon: <LuFileText style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'Invoicing, billing, and receipt tracking',
      'Expense management',
      'Bank reconciliation',
      'Real-time P&L and balance sheet',
    ],
  },
  {
    title: 'Purchase & Vendor',
    icon: <LuTruck style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'Automated purchase orders',
      'Vendor evaluation',
      'Delivery tracking',
      'Quotation comparison',
    ],
  },
  {
    title: 'Production & Manufacturing',
    icon: <LuFactory style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'BoM (Bill of Materials)',
      'WIP & job cards',
      'Production costing',
      'Finished goods management',
    ],
  },
  {
    title: 'Education',
    icon: <LuBookOpen style={{ color: '#fff', fontSize: '2.2rem', marginRight: '0.5rem' }} />,
    items: [
      'Student admissions, attendance, and fees',
      'Exam schedule and reports',
      'Teacher and parent portals',
    ],
  },
];

const ErpDetails = () => (
  <div className="web-dev-section">  
    <div className="web-dev-herosection">
      <div className="custom-container">
        <div className="section-heading-wrapper">
          <h1 className="main-title">ERP Solutions</h1>
        </div>
        <div className="intro-section">
          <div className="intro-content">
            <p className="intro-text">
              <strong>Ray Tech</strong> is your trusted partner for digital transformation, offering state-of-the-art ERP software that integrates every department - HR, Sales, Inventory, Operations, Finance, Production, and more—into one intelligent system.
            </p>
            <p className="intro-text mb-0">
              In a world where efficiency drives growth, Ray Tech offers a unified ERP solution designed to <strong>streamline operations, integrate teams, and accelerate decision-making.</strong> Our ERP solution is fully modular, cloud-based, and customizable—tailored to your business model, whether you're a clinic, manufacturer, corporate firm, or startup.
            </p>
          </div>
          <div className="intro-animation">
            <DotLottieReact
              src="https://lottie.host/d2641110-0758-400e-8595-af6aa5710ebf/13wfoSc9pA.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </div>

    <div className="benefits-section">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="">
            <KeyBenefits 
              benefits={erpBenefits}
              title="Key Benefits"
              subtitle="Discover how a modern ERP can transform your business and drive sustainable growth" 
            />
          </div>
        </div>
        <div className="section-dots dots-top-right"></div>
        <div className="section-dots dots-bottom-left"></div>
      </div>
    </div>

    
    <div className="web-dev-services-section">
      <div className="custom-container">
        <div className="section-heading-wrapper">
          <h2 className="section-title">Core Modules</h2>
          <p className="byline">Comprehensive ERP solutions tailored to your business processes and industry requirements</p>
        </div>
        <div className="erp-step-cards-wrapper">
          {erpModules.map((module, idx) => (
            <div
              key={idx}
              className="erp-step-card"
            >
              <div className="erp-step-card-top">
                <div className="erp-step-chevron" style={{ background: erpStepColors[idx % erpStepColors.length] }}>
                  <span className="erp-step-number">{`STEP ${String(idx + 1).padStart(2, '0')}`}</span>
                  <span className="erp-step-icon">{module.icon}</span>
                </div>
              </div>
              <div className="erp-step-card-content">
                <h3 className="erp-step-title">{module.title}</h3>
                <div className="erp-step-divider"></div>
                <ul className="erp-step-features-modern">
                  {module.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="section-dots dots-bottom-left"></div>
      </div>
    </div>
  </div>
);

export default ErpDetails; 