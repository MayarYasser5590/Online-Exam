export interface DiplomasResponse {
  message: string;
  metadata: Metadata;
  subjects: Diploma[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}

export interface Diploma {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
}
