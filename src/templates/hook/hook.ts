const HOOK_TEMPLATE = `import { gql, useQuery } from '@apollo/client';
import { useReducer } from 'react';

import { QueryCoursesArgs } from '@/types/graphql';

import type { ActionType, CoursesData } from './{{name}}.type';

const GET_COURSES = gql\`
  query GetCourses($pagination: PaginationInput, $keyword: String) {
    courses(pagination: $pagination, keyword: $keyword) {
      nodes {
        id
      }
    }
  }
\`;

const initialState = {
  pagination: {
    page: 1,
    pageSize: 10,
  },
};

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'KEYWORD_CHANGE':
      return {
        ...state,
        keyword: action.payload.keyword,
        pagination: { ...state.pagination, page: 1 },
      };
    case 'PAGINATION_CHANGE':
      return {
        ...state,
        pagination: { ...state.pagination, ...action.payload.pagination },
      };
    default:
      throw new Error();
  }
};

const {{name}} = () => {
  const [variables, dispatch] = useReducer(reducer, initialState);
  const { loading, data } = useQuery<CoursesData, QueryCoursesArgs>(GET_COURSES, { variables });

  return { data, dispatch, loading };
};

export default {{name}};
`;

export default HOOK_TEMPLATE;
