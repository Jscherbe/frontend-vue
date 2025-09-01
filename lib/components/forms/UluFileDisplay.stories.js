import UluFileDisplay from "./UluFileDisplay.vue";

export default {
  component: UluFileDisplay,
  tags: ["autodocs"],
};

const mockFile = new File([new ArrayBuffer(12345)], "example-document.pdf", {
  type: "application/pdf",
});

export const Default = {
  args: {
    file: mockFile,
  },
};

const mockFileSmall = new File([new ArrayBuffer(500)], "small-file.txt", {
  type: "text/plain",
});

export const SmallFile = {
  args: {
    file: mockFileSmall,
  },
};

const mockFileLarge = new File(
  [new ArrayBuffer(5000000)],
  "large-video.mp4",
  {
    type: "video/mp4",
  }
);

export const LargeFile = {
  args: {
    file: mockFileLarge,
  },
};

export const NoFileSize = {
  args: {
    file: mockFile,
    noFileSize: true,
  },
};

export const CustomIcon = {
  args: {
    file: mockFile,
    icon: "star",
  },
};

export const CustomSlot = {
  render: (args) => ({
    components: { UluFileDisplay },
    setup() {
      return { args };
    },
    template: `
      <UluFileDisplay v-bind="args">
        <template #default="{ fileName, fileSize }">
          <em>{{ fileName }} ({{ fileSize }})</em>
        </template>
      </UluFileDisplay>
    `,
  }),
  args: {
    file: mockFile,
  },
};