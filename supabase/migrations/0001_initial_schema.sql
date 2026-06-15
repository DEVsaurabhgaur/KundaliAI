-- Initial schema for KundaliAI
-- Users table handled by Supabase Auth (auth.users)

-- Create a table to store generated Kundalis
CREATE TABLE public.kundalis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    time_of_birth TIME NOT NULL,
    place_of_birth TEXT NOT NULL,
    latitude DECIMAL(10, 6) NOT NULL,
    longitude DECIMAL(10, 6) NOT NULL,
    ai_reading TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.kundalis ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to view only their own Kundalis
CREATE POLICY "Users can view their own kundalis" 
    ON public.kundalis 
    FOR SELECT 
    USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own Kundalis
CREATE POLICY "Users can insert their own kundalis" 
    ON public.kundalis 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own Kundalis
CREATE POLICY "Users can update their own kundalis" 
    ON public.kundalis 
    FOR UPDATE 
    USING (auth.uid() = user_id);

-- Create policy to allow users to delete their own Kundalis
CREATE POLICY "Users can delete their own kundalis" 
    ON public.kundalis 
    FOR DELETE 
    USING (auth.uid() = user_id);

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_kundalis_updated_at
    BEFORE UPDATE ON public.kundalis
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
