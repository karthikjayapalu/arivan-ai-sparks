
import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import InnovationCard from '@/components/InnovationCard';
import DeliveryMethod from '@/components/DeliveryMethod';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-hero-pattern bg-cover bg-center min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              AI Services for the <span className="text-arivan-accent">Modern Enterprise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Global AI Solutions, Powered by Bengaluru's Expertise
            </p>
            <p className="text-lg mb-8 max-w-2xl text-white/80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              At <span className="font-bold">Arivan.ai</span>, we build cutting-edge AI systems that help businesses automate, optimize, and innovate.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button size="lg" className="bg-arivan-accent hover:bg-arivan-accent/90 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title gradient-text">Core AI Services</h2>
            <p className="section-subtitle">Transform your business with our suite of advanced AI solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Generative AI & LLMs"
              description="Transform your business with intelligent automation powered by large language models."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>}
              details={[
                "Custom LLM Development – Industry-specific AI trained on your data",
                "AI Chatbots & Virtual Assistants – Conversational AI for customer support",
                "Content Generation Systems – Automated marketing copy and reports"
              ]}
              caseStudy="Reduced legal document drafting from 6-10 hours to under 2 minutes (like LegalMation with IBM Watson)"
            />
            
            <ServiceCard
              title="Computer Vision & Image Analysis"
              description="See beyond the visible with AI-powered vision solutions for your business."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>}
              details={[
                "Object & Facial Recognition – Security, retail analytics, and customer personalization",
                "Medical Imaging AI – Enhanced diagnostics and research support",
                "Video Analytics – Real-time tracking, surveillance, and industrial inspections"
              ]}
            />
            
            <ServiceCard
              title="Predictive Analytics & BI"
              description="Turn your data into foresight with our advanced predictive analytics solutions."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>}
              details={[
                "Customer Behavior Prediction – Anticipate trends and buying patterns",
                "Fraud Detection AI – Reduce financial losses by 40%+ (proven in banking & fintech)",
                "Smart Manufacturing AI – Predict equipment failures before they happen"
              ]}
            />
            
            <ServiceCard
              title="AI-Powered Process Automation"
              description="Eliminate repetitive tasks with intelligent workflows and automation."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>}
              details={[
                "Agentic AI Assistants – Autonomous decision-making for admin tasks",
                "Document Processing AI – Extract, classify, and analyze contracts and forms",
                "Workflow Optimization – Streamline operations across departments"
              ]}
            />
            
            <ServiceCard
              title="Industry-Specific AI Solutions"
              description="Tailored AI solutions designed specifically for your industry's unique challenges."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>}
              details={[
                "Healthcare AI – Diagnostic support, patient monitoring, drug discovery",
                "Financial AI – Risk assessment, algorithmic trading, compliance automation",
                "Retail & E-Commerce AI – Dynamic pricing, visual search, inventory optimization",
                "Smart Manufacturing AI – Quality control, predictive maintenance"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Innovations Section */}
      <section id="innovations" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title gradient-text">Emerging AI Innovations</h2>
            <p className="section-subtitle">Stay ahead of the curve with cutting-edge AI technologies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InnovationCard 
              title="Edge AI" 
              icon="🚀" 
              points={[
                "On-device AI processing for privacy-sensitive applications",
                "Real-time decision-making without cloud dependency",
                "Lower operational costs with reduced data transfer needs"
              ]}
            />
            
            <InnovationCard 
              title="Sustainable AI" 
              icon="🌱" 
              points={[
                "Energy-efficient AI models to reduce carbon footprint",
                "Carbon footprint reduction systems for environmental monitoring",
                "Smart city & green tech solutions for sustainable development"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Delivery Section */}
      <section id="delivery" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title gradient-text">How We Deliver AI</h2>
            <p className="section-subtitle">Choose the model that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            <DeliveryMethod 
              title="AI-as-a-Service (AIaaS)" 
              description="Subscription-based AI for continuous optimization without heavy upfront investment." 
            />
            
            <DeliveryMethod 
              title="Custom AI Development" 
              description="Bespoke solutions for unique business challenges tailored to your specific needs." 
            />
            
            <DeliveryMethod 
              title="AI Integration Services" 
              description="Seamlessly deploy Google, AWS, or IBM AI into your existing workflows and systems." 
            />
            
            <DeliveryMethod 
              title="AI Strategy Consulting" 
              description="Expert guidance on high-impact AI adoption to maximize return on investment." 
            />
            
            <DeliveryMethod 
              title="Managed AI Services" 
              description="Comprehensive ongoing support, maintenance, and upgrades for your AI systems." 
            />
          </div>
        </div>
      </section>
      
      {/* Why Us Section */}
      <section id="why" className="section-padding bg-arivan-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-white">Why Arivan.ai?</h2>
            <p className="text-xl text-arivan-light/90 mb-8">Our commitment to excellence sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-arivan-accent font-bold mb-2">Cost-Effective Excellence</h3>
              <p className="text-arivan-light/90">Bengaluru's AI talent at competitive global rates for maximum value.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-arivan-accent font-bold mb-2">24/7 Delivery Model</h3>
              <p className="text-arivan-light/90">US-based client management + India's technical execution for continuous progress.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-arivan-accent font-bold mb-2">Proven AI Frameworks</h3>
              <p className="text-arivan-light/90">Built on Google Gemini, OpenAI, AWS, and IBM Watson for reliability.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-arivan-accent font-bold mb-2">Enterprise-Grade Security</h3>
              <p className="text-arivan-light/90">Compliant with global data protection standards for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">Let's Build Your AI Future Together</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge AI solutions? Contact us today to discuss how we can help you achieve your goals.
          </p>
          <Button size="lg" className="bg-arivan-accent hover:bg-arivan-accent/90 text-white">
            Get A Free Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
