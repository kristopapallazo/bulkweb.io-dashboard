import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEG_BY_ID, NICHES_BY_ID } from "../TempStaticData";

const initialNiches: NicheAllIds = Object.keys(NICHES_BY_ID) as NicheAllIds;
const initialCategs: TemplateAllIds = Object.values(
  NICHES_BY_ID
).reduce<CategAllIds>((acc, { categs }) => {
  return [...acc, ...categs];
}, []);

const initialPagination = {
  currentPage: 1,
  pageSize: 15,
};

const initialState: WebsiteCreationFlow = {
  domain: null,
  niche: "all-niches",
  category: null,
  template: null,
  hosting: null,
  payment: null,
  selectedTemplates: [],
  searchQuery: "",
  templateType: "All templates",
  pagination: initialPagination,
  nicheAllIds: initialNiches,
  nicheById: NICHES_BY_ID,
  categAllIds: initialCategs,
  categById: CATEG_BY_ID,
  filteredCategs: initialCategs,
};

const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    setDomain: (state, action: PayloadAction<string | null>) => {
      state.domain = action.payload;
    },
    setNiche: (state, action: PayloadAction<NicheId>) => {
      const nicheId = action.payload;
      //update niche selected
      state.niche = nicheId;
      //reset other filters: categ, search, pagination
      state.category = null;
      state.searchQuery = "";
      state.pagination = initialPagination;
      //filter categs based on niche
      if (nicheId === "all-niches") {
        state.filteredCategs = state.categAllIds;
      } else {
        const niche = state.nicheById[nicheId as keyof typeof state.nicheById];
        state.filteredCategs = niche.categs;
      }
    },
    setCategory: (state, action: PayloadAction<CategId | null>) => {
      //update categ
      const selectedCateg = action.payload;
      state.category = selectedCateg;
      //reset other filters: search, pagination
      state.searchQuery = "";
      state.pagination = initialPagination;
    },
    setPaginationFilter: (state, action: PayloadAction<PaginationObject>) => {
      state.searchQuery = "";

      state.pagination = action.payload;
    },

    setSearchQuery: (state, action: PayloadAction<SearchQuery>) => {
      state.searchQuery = action.payload;
    },
    setTemplateType: (state, action: PayloadAction<TemplateFilterTag>) => {
      state.templateType = action.payload;
    },

    setTemplate: (state, action: PayloadAction<TemplateId | null>) => {
      const val = action.payload;
      if (val !== null) {
        state.template = val;
        state.selectedTemplates = [val];
      } else {
        state.template = null;
        state.selectedTemplates = [];
      }
    },
    setHosting: (state, action: PayloadAction<HostingPref>) => {
      state.hosting = action.payload;
    },
    setPayment: (state, action: PayloadAction<PaymentInfo>) => {
      state.payment = action.payload;
    },
    resetFlow: (state) => {
      state.templateType = initialState.templateType;
      state.niche = initialState.niche;
      state.category = initialState.category;
    },
  },
});

export const {
  setDomain,
  setNiche,
  setCategory,
  setTemplate,
  setHosting,
  setPayment,
  setTemplateType,
  resetFlow,
  setSearchQuery,
  setPaginationFilter,
} = flowSlice.actions;

export default flowSlice.reducer;
