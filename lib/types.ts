export type OrgCategory = "UKK" | "UKM";

export type Organization = {
  id: string;
  slug: string;
  name: string;
  category: OrgCategory;
  summary: string;
  description: string;
  cover_image_url: string;
  qr_image_url: string;
  join_url: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type OrganizationInput = Omit<
  Organization,
  "id" | "created_at" | "updated_at"
> & { id?: string };
