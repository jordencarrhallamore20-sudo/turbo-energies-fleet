create extension if not exists "pgcrypto";

create table if not exists roles (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table if not exists profiles (
  id uuid primary key,
  full_name text not null,
  role_name text not null references roles(name),
  created_at timestamptz default now()
);

create table if not exists units (
  id uuid primary key default gen_random_uuid(),
  fleet_number text unique not null,
  type text not null,
  category text not null,
  status text not null default 'Running',
  location text,
  km numeric default 0,
  hours numeric default 0,
  next_service_km numeric,
  next_service_hours numeric,
  created_at timestamptz default now()
);

create table if not exists faults (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  fault text not null,
  work_done text,
  work_to_be_done text,
  assigned_to text,
  status text default 'Open',
  opened_at date default current_date,
  created_by uuid
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  service_type text not null,
  work_done text,
  service_date date not null,
  km numeric default 0,
  hours numeric default 0,
  technician text,
  created_by uuid
);

create table if not exists parts (
  id uuid primary key default gen_random_uuid(),
  part_name text not null,
  part_number text unique,
  quantity numeric default 0,
  reorder_level numeric default 0,
  status text not null,
  unit_price numeric default 0,
  created_at timestamptz default now()
);

create table if not exists worksheets (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  user_name text not null,
  work_type text not null,
  description text not null,
  work_date date not null,
  hours_spent numeric default 0
);

create table if not exists fuel_logs (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  fill_date date not null,
  litres numeric not null,
  cost numeric default 0,
  km numeric default 0,
  hours numeric default 0,
  supplier text
);

create table if not exists tyre_logs (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  tyre_position text,
  brand text,
  size text,
  fit_date date,
  remove_date date,
  cost numeric default 0,
  notes text
);

create table if not exists downtime_logs (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  down_from timestamptz not null,
  back_to_service timestamptz,
  reason text,
  notes text
);

create table if not exists attachments (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  fault_id uuid references faults(id) on delete cascade,
  service_id uuid references services(id) on delete cascade,
  file_name text not null,
  storage_path text not null,
  uploaded_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid references units(id) on delete cascade,
  channel text not null,
  message text not null,
  status text default 'queued',
  created_at timestamptz default now()
);
