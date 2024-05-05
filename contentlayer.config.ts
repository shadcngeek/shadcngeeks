import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {},
}));

export const PaymentMethod = defineDocumentType(() => ({
  name: "PaymentMethod",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {},
}));

export const PriceUI = defineDocumentType(() => ({
  name: "PriceUI",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {},
}));

export const SimpleDocs = defineDocumentType(() => ({
  name: "SimpleDocs",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {},
}));

export default makeSource({
  contentDirPath: "markdown",
  contentDirInclude: [],
  documentTypes: [Snippet, PaymentMethod, PriceUI, SimpleDocs],
});
