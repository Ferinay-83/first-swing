-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  service VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'new'
);

-- Create service_bookings table (renamed from bookings)
CREATE TABLE IF NOT EXISTS service_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  vehicle VARCHAR(255) NOT NULL,
  service VARCHAR(100) NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  estimated_cost DECIMAL(10,2),
  actual_cost DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create service_history table for tracking completed services
CREATE TABLE IF NOT EXISTS service_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255),
  customer_phone VARCHAR(50),
  vehicle VARCHAR(255) NOT NULL,
  service_type VARCHAR(100) NOT NULL,
  service_description TEXT,
  parts_used TEXT,
  labor_hours DECIMAL(4,2),
  total_cost DECIMAL(10,2),
  service_date DATE NOT NULL,
  mechanic_name VARCHAR(255),
  warranty_months INTEGER DEFAULT 6,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_posts table for automotive tips and news
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  author VARCHAR(255),
  category VARCHAR(100), -- e.g., 'maintenance-tips', 'repair-guides', 'news'
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create customer_testimonials table
CREATE TABLE IF NOT EXISTS customer_testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  testimonial TEXT NOT NULL,
  vehicle VARCHAR(255),
  service_type VARCHAR(100),
  service_date DATE,
  featured BOOLEAN DEFAULT false,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create vehicle_inventory table for tracking common parts
CREATE TABLE IF NOT EXISTS vehicle_inventory (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  part_name VARCHAR(255) NOT NULL,
  part_number VARCHAR(100),
  brand VARCHAR(100),
  compatible_vehicles TEXT, -- JSON array of compatible vehicle models
  quantity_in_stock INTEGER DEFAULT 0,
  unit_cost DECIMAL(10,2),
  supplier VARCHAR(255),
  last_restocked DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

CREATE INDEX IF NOT EXISTS idx_service_bookings_appointment_date ON service_bookings(appointment_date);
CREATE INDEX IF NOT EXISTS idx_service_bookings_status ON service_bookings(status);
CREATE INDEX IF NOT EXISTS idx_service_bookings_email ON service_bookings(email);

CREATE INDEX IF NOT EXISTS idx_service_history_service_date ON service_history(service_date);
CREATE INDEX IF NOT EXISTS idx_service_history_customer_email ON service_history(customer_email);
CREATE INDEX IF NOT EXISTS idx_service_history_vehicle ON service_history(vehicle);

CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON customer_testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON customer_testimonials(approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_rating ON customer_testimonials(rating);

CREATE INDEX IF NOT EXISTS idx_inventory_part_name ON vehicle_inventory(part_name);
CREATE INDEX IF NOT EXISTS idx_inventory_quantity ON vehicle_inventory(quantity_in_stock);
