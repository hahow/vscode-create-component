const TYPE_TEMPLATE = `import type { Course } from '@/types/graphql';

export interface CoursesData {
  courses: {
    nodes: Pick<Course, 'id'>[];
  };
}

export type ActionType =
  | { type: 'KEYWORD_CHANGE'; payload: { keyword: string } }
  | {
      type: 'PAGINATION_CHANGE';
      payload: { pagination: { page: number; pageSize: number } };
    };
`;

export default TYPE_TEMPLATE;
