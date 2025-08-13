import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const PageMeta = ({ 
  title = "Besami Geosynthetic Services - Construction & Engineering Excellence in Uganda",
  description = "Leading construction and engineering company in Uganda specializing in HDPE liners, geosynthetic solutions, civil construction, plastic welding, waterproofing, and landscaping. Professional infrastructure development services.",
  keywords = "construction Uganda, geosynthetic engineering, HDPE liners, plastic welding, waterproofing, civil construction, landscaping, infrastructure development, Kampala construction, geomembrane installation",
  image = "https://besamigeosynthetic-services.com/og-image.jpg",
  url = "https://besamigeosynthetic-services.com/",
  type = "website"
}: PageMetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default PageMeta;