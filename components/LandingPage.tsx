import React, { useState } from 'react';
import { 
  Leaf, Shield, Factory, QrCode, TrendingUp, Map, Menu, X, 
  CheckCircle2, XCircle, Droplets, Zap, Globe, AlertTriangle,
  FileCheck, Truck, FlaskConical, Package, Award, ChevronDown, Check, Star
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import DashboardMockup from './DashboardMockup';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      {/* 1. HEADER (Sticky) */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-green-600 p-1.5 rounded-lg">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">EcoTrace</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('features')} className="hover:text-green-600 transition-colors">Fonctionnalités</button>
            <button onClick={() => scrollToSection('workflow')} className="hover:text-green-600 transition-colors">Workflow</button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-green-600 transition-colors">Impact</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-green-600 transition-colors">Tarifs</button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">Démo Gratuite</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
             <button onClick={() => scrollToSection('features')} className="text-left py-2 font-medium">Fonctionnalités</button>
             <button onClick={() => scrollToSection('workflow')} className="text-left py-2 font-medium">Workflow</button>
             <button onClick={() => scrollToSection('impact')} className="text-left py-2 font-medium">Impact</button>
             <button onClick={() => scrollToSection('pricing')} className="text-left py-2 font-medium">Tarifs</button>
             <Button className="w-full bg-green-600 hover:bg-green-700">Démo Gratuite</Button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-green-50/50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-1 space-y-8 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-3 h-3" /> Conforme DEEC / UEMOA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Transformez vos Huiles Usées en <span className="text-green-600">Opportunité Écologique</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                La première plateforme SaaS de traçabilité complète en Afrique de l'Ouest. 
                De la collecte au certificat, sécurisez votre chaîne de recyclage et prouvez votre impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-base h-12 px-8">
                  Essai Gratuit 30 Jours
                </Button>
                <Button size="lg" variant="outline" className="text-base h-12 px-8 border-slate-300 hover:bg-slate-50">
                  Voir une Démo
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
                 <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" /> ISO 14001:2015</div>
                 <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" /> Certificats CNIC</div>
                 <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" /> +200 Entreprises</div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl lg:max-w-none perspective-1000">
               <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATISTIQUES IMPACT */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-blue-600">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">500k+</h3>
              <p className="text-sm font-medium text-slate-500">Litres Recyclés</p>
            </div>
            <div className="text-center space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-green-600">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">1,150 T</h3>
              <p className="text-sm font-medium text-slate-500">CO2 Économisé</p>
            </div>
            <div className="text-center space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-orange-600">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">200+</h3>
              <p className="text-sm font-medium text-slate-500">Entreprises Actives</p>
            </div>
            <div className="text-center space-y-2 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="bg-violet-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-violet-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">99.9%</h3>
              <p className="text-sm font-medium text-slate-500">Traçabilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROBLÈME vs SOLUTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La fin de l'opacité dans le recyclage</h2>
            <p className="text-slate-600 text-lg">
              Le secteur des huiles usées en Afrique de l'Ouest souffre d'un manque de transparence. EcoTrace change la donne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-red-500 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-red-600">
                  <XCircle className="w-6 h-6" /> Sans EcoTrace
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <p className="text-slate-600">Huiles incinérées ou déversées dans la nature illégalement.</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <p className="text-slate-600">Fraudes volumétriques massives et déclarations gonflées.</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <p className="text-slate-600">Certificats papier falsifiables et perdus.</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <p className="text-slate-600">Aucune donnée fiable sur l'impact écologique réel.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 shadow-lg scale-100 md:scale-105 transition-transform bg-white z-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-600">
                  <CheckCircle2 className="w-6 h-6" /> Avec EcoTrace
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-slate-700 font-medium">Recyclage certifié à 100% avec preuves GPS.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-slate-700 font-medium">Détection automatique des fraudes via IA.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-slate-700 font-medium">Certificats CNIC cryptographiques infalsifiables.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-slate-700 font-medium">Rapports ESG (CO2, Eau, Énergie) automatisés.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. FONCTIONNALITÉS */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">Technologie</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Une plateforme complète pour l'économie circulaire</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<QrCode className="w-6 h-6 text-white" />}
              color="bg-blue-600"
              title="Traçabilité 6 Points"
              description="Scan QR code à chaque étape, de la production à la régénération. Audit trail complet et immuable."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-white" />}
              color="bg-green-600"
              title="Certificats CNIC"
              description="Certificats signés cryptographiquement (SHA-256). Vérifiables publiquement et valides 10 ans."
            />
            <FeatureCard 
              icon={<AlertTriangle className="w-6 h-6 text-white" />}
              color="bg-orange-500"
              title="Détection Fraude"
              description="Corrélation volumétrique intelligente. Alerte immédiate si un écart >15% est détecté entre deux étapes."
            />
             <FeatureCard 
              icon={<Leaf className="w-6 h-6 text-white" />}
              color="bg-teal-600"
              title="Impact Environnemental"
              description="Calcul scientifique du CO2, de l'eau et de l'énergie économisés. Rapports conformes GRI et CDP."
            />
             <FeatureCard 
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              color="bg-violet-600"
              title="Dashboard Analytics"
              description="KPIs en temps réel, graphiques interactifs et gestion multi-sites pour un pilotage précis."
            />
             <FeatureCard 
              icon={<Map className="w-6 h-6 text-white" />}
              color="bg-rose-500"
              title="GPS Tracking Live"
              description="Suivi des camions en temps réel. Mesure de distance et vitesse pour prévenir les détours illicites."
            />
          </div>
        </div>
      </section>

      {/* 6. WORKFLOW MOBILE */}
      <section id="workflow" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Un workflow simple en 6 scans</h2>
            <p className="text-slate-600 mt-4">Une application mobile intuitive pour chaque acteur de la chaîne.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <WorkflowStep 
              number="1" 
              title="Déclaration" 
              role="Producteur"
              icon={<Package className="w-5 h-5" />} 
              desc="Déclaration volume + photo + GPS" 
              color="bg-blue-100 text-blue-700 border-blue-200" 
            />
            <WorkflowStep 
              number="2" 
              title="Collection" 
              role="Agent"
              icon={<QrCode className="w-5 h-5" />} 
              desc="Scan, vérification volume réel" 
              color="bg-green-100 text-green-700 border-green-200" 
            />
            <WorkflowStep 
              number="3" 
              title="Transport" 
              role="Chauffeur"
              icon={<Truck className="w-5 h-5" />} 
              desc="Tracking GPS temps réel" 
              color="bg-orange-100 text-orange-700 border-orange-200" 
            />
            <WorkflowStep 
              number="4" 
              title="Réception" 
              role="Réceptionniste"
              icon={<FlaskConical className="w-5 h-5" />} 
              desc="Pesée + 4 tests qualité" 
              color="bg-violet-100 text-violet-700 border-violet-200" 
            />
            <WorkflowStep 
              number="5" 
              title="Traitement" 
              role="Opérateur"
              icon={<Factory className="w-5 h-5" />} 
              desc="Filtration & calcul rendement" 
              color="bg-rose-100 text-rose-700 border-rose-200" 
            />
            <WorkflowStep 
              number="6" 
              title="Certification" 
              role="Système"
              icon={<Award className="w-5 h-5" />} 
              desc="Génération automatique CNIC" 
              color="bg-teal-100 text-teal-700 border-teal-200" 
            />
          </div>
        </div>
      </section>

      {/* 8. IMPACT ENVIRONNEMENTAL (High visual impact) */}
      <section id="impact" className="py-20 bg-gradient-to-br from-green-700 to-emerald-900 text-white overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Un impact mesurable et certifié</h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Vos efforts ne passent plus inaperçus. EcoTrace quantifie scientifiquement chaque litre recyclé selon les standards internationaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ImpactCard 
              icon={<Leaf className="w-8 h-8 text-green-300" />}
              value="23 Tonnes"
              label="CO2 Économisé"
              subtext="-74% vs Incinération"
            />
            <ImpactCard 
              icon={<Droplets className="w-8 h-8 text-blue-300" />}
              value="102,340 L"
              label="Eau Économisée"
              subtext="-90% vs Production Pétrole"
            />
            <ImpactCard 
              icon={<Zap className="w-8 h-8 text-yellow-300" />}
              value="57,345 kWh"
              label="Énergie Préservée"
              subtext="-70% vs Production Pétrole"
            />
            <ImpactCard 
              icon={<Globe className="w-8 h-8 text-violet-300" />}
              value="714 Barils"
              label="Pétrole Brut Épargné"
              subtext="113,526 L de brut"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-xl font-semibold mb-6 text-center">Équivalences Concrètes (Mensuel)</h3>
            <div className="flex flex-col sm:flex-row justify-around items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <Leaf className="w-8 h-8 text-green-300" />
                </div>
                <div>
                  <div className="text-3xl font-bold">1,119</div>
                  <div className="text-green-200 text-sm">Arbres plantés</div>
                </div>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block"></div>
              <div className="flex items-center gap-4">
                 <div className="bg-blue-500/20 p-3 rounded-full">
                  <Truck className="w-8 h-8 text-blue-300" />
                </div>
                <div>
                  <div className="text-3xl font-bold">5.1</div>
                  <div className="text-green-200 text-sm">Voitures retirées / an</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TÉMOIGNAGES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold">Ils nous font confiance</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-sm border-slate-200">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <blockquote className="text-slate-700 text-lg mb-6 italic">
                  "Avant EcoTrace, on perdait 20% de nos volumes en fraudes. Maintenant, zéro anomalie non détectée. C'est un outil indispensable pour notre rentabilité."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">AD</div>
                  <div>
                    <div className="font-bold text-slate-900">Amadou Diallo</div>
                    <div className="text-sm text-slate-500">Directeur Opérations, RecycleHub Sénégal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

             <Card className="bg-white shadow-sm border-slate-200">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <blockquote className="text-slate-700 text-lg mb-6 italic">
                  "Les rapports ESG automatisés nous ont fait économiser 40 heures/mois. Et nos clients institutionnels adorent pouvoir vérifier les certificats digitaux."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">FN</div>
                  <div>
                    <div className="font-bold text-slate-900">Fatou Ndiaye</div>
                    <div className="text-sm text-slate-500">Responsable RSE, GreenOil Côte d'Ivoire</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. TARIFS */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Des tarifs adaptés à votre croissance</h2>
            <p className="text-slate-600">Choisissez le plan qui correspond à votre volume de recyclage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Basic */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Basic</CardTitle>
                <div className="text-4xl font-bold mt-2">99€<span className="text-base font-normal text-slate-500">/mois</span></div>
                <CardDescription>Pour démarrer la traçabilité</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> 100 lots/mois</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> 2 utilisateurs</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Application mobile</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Certificats CNIC</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Support email</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Démarrer</Button>
              </CardFooter>
            </Card>

            {/* Pro */}
            <Card className="border-green-500 shadow-xl relative scale-105">
              <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                 <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Plus Populaire</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Pro</CardTitle>
                <div className="text-4xl font-bold mt-2">299€<span className="text-base font-normal text-slate-500">/mois</span></div>
                <CardDescription>Pour les recycleurs établis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> 1,000 lots/mois</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> 10 utilisateurs</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Dashboard Analytics</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Rapports ESG Automatisés</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> API Access</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Support prioritaire</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Choisir Pro</Button>
              </CardFooter>
            </Card>

            {/* Enterprise */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Enterprise</CardTitle>
                <div className="text-4xl font-bold mt-2">999€<span className="text-base font-normal text-slate-500">/mois</span></div>
                <CardDescription>Pour les industriels majeurs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Lots illimités</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Utilisateurs illimités</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> White-labeling</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Blockchain integration</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> SLA 99.9%</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Support dédié 24/7</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Contactez-nous</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-4">
             <FaqItem 
              isOpen={openFaq === 0}
              toggle={() => toggleFaq(0)}
              question="Comment fonctionne la détection de fraude ?"
              answer="Notre moteur de corrélation compare les volumes à chaque étape (déclaré → collecté → réceptionné → traité). Si l'écart dépasse 15%, le certificat est bloqué et une alerte est générée automatiquement pour investigation."
            />
            <FaqItem 
              isOpen={openFaq === 1}
              toggle={() => toggleFaq(1)}
              question="Les certificats CNIC sont-ils acceptés par les autorités ?"
              answer="Oui, nos certificats sont conformes aux directives DEEC et UEMOA. Le hash cryptographique SHA-256 garantit qu'aucune modification n'est possible après génération, assurant leur valeur légale."
            />
            <FaqItem 
              isOpen={openFaq === 2}
              toggle={() => toggleFaq(2)}
              question="Combien de temps prend l'implémentation ?"
              answer="L'onboarding se fait en 48h. Nous créons vos comptes, formons vos équipes via visio (2h), et votre premier lot peut être tracé dès le 3ème jour."
            />
            <FaqItem 
              isOpen={openFaq === 3}
              toggle={() => toggleFaq(3)}
              question="Puis-je intégrer EcoTrace à mon ERP existant ?"
              answer="Absolument. Une API REST complète est disponible dès le plan Pro. Nous fournissons une documentation Swagger et des SDKs JavaScript/Python pour faciliter l'intégration."
            />
            <FaqItem 
              isOpen={openFaq === 4}
              toggle={() => toggleFaq(4)}
              question="Comment calculez-vous l'impact environnemental ?"
              answer="Nous utilisons des facteurs scientifiques reconnus : 3.1 kg CO2/L évités par rapport à l'incinération. Chaque métrique (eau, énergie) est auditable et conforme à la norme ISO 14064."
            />
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à Transformer Votre Traçabilité ?</h2>
          <p className="text-green-100 text-xl max-w-2xl mx-auto mb-10">
            Rejoignez les 200+ entreprises qui recyclent, certifient et mesurent leur impact avec EcoTrace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-slate-100 font-bold px-8 h-12">
              Essai Gratuit 30 Jours
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700 hover:text-white px-8 h-12 bg-transparent">
              Planifier une Démo
            </Button>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                 <Leaf className="w-5 h-5" />
                 <span className="text-lg font-bold">EcoTrace</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                La solution standard pour la traçabilité des huiles usées en Afrique de l'Ouest.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">in</div>
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">x</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Webinaires</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Conformité UEMOA</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Support</a></li>
              </ul>
            </div>
             <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">CGU</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">RGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
             <div>&copy; 2026 EcoTrace. Tous droits réservés.</div>
             <div className="flex gap-4 opacity-70">
                <span>Conforme DEEC/UEMOA</span>
                <span>ISO 14001:2015</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components for cleaner code

const FeatureCard = ({ icon, color, title, description }: { icon: React.ReactNode, color: string, title: string, description: string }) => (
  <Card className="hover:shadow-lg transition-shadow border-slate-200">
    <CardHeader>
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const WorkflowStep = ({ number, title, role, icon, desc, color }: { number: string, title: string, role: string, icon: React.ReactNode, desc: string, color: string }) => (
  <div className={`border rounded-xl p-4 flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform bg-white shadow-sm ${color.replace('text', 'border')}`}>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${color.includes('blue') ? 'bg-blue-600 text-white' : ''} ${color.includes('green') ? 'bg-green-600 text-white' : ''} ${color.includes('orange') ? 'bg-orange-600 text-white' : ''} ${color.includes('violet') ? 'bg-violet-600 text-white' : ''} ${color.includes('rose') ? 'bg-rose-600 text-white' : ''} ${color.includes('teal') ? 'bg-teal-600 text-white' : ''}`}>
      {number}
    </div>
    <div className={`p-3 rounded-full bg-slate-50`}>
      {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-slate-700" })}
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <span className="text-xs uppercase font-semibold text-slate-500 tracking-wide">{role}</span>
    </div>
    <p className="text-xs text-slate-600 leading-tight">{desc}</p>
  </div>
);

const ImpactCard = ({ icon, value, label, subtext }: { icon: React.ReactNode, value: string, label: string, subtext: string }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center hover:bg-white/15 transition-colors">
    <div className="flex justify-center mb-4">{icon}</div>
    <div className="text-3xl md:text-4xl font-bold mb-1">{value}</div>
    <div className="font-medium text-green-200 mb-2">{label}</div>
    <div className="text-xs text-white/70 bg-black/20 inline-block px-2 py-1 rounded">{subtext}</div>
  </div>
);

const FaqItem = ({ isOpen, toggle, question, answer }: { isOpen: boolean, toggle: () => void, question: string, answer: string }) => (
  <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
    <button 
      onClick={toggle}
      className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
    >
      <span>{question}</span>
      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
        {answer}
      </div>
    )}
  </div>
);
