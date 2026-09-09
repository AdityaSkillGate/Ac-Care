import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustSection from '@/components/TrustSection';
import ProblemSelector from '@/components/ProblemSelector';
import HealthCheck from '@/components/HealthCheck';
import ServiceAreas from '@/components/ServiceAreas';
import SeoContent from '@/components/SeoContent';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileActions from '@/components/MobileActions';

export default function Home(){
  return <main><Header/><Hero/><Services/><TrustSection/><ProblemSelector/><HealthCheck/><ServiceAreas/><SeoContent/><Contact/><Footer/><MobileActions/></main>;
}
