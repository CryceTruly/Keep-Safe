export interface Case {
  id?: string;
  phone?: string;
  happened?: string;
  user?: string;
  district?: string;
  reported?: string;
  reportedFrom?: string;
  reported_by?: string;
  province?: string;
  description?: string;
}
export interface CaseId extends Case {
  id: string;
}
