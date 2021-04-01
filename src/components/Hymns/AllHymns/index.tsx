import React, { useState, ReactElement } from "react";
import { Box } from "@material-ui/core";
import Hymn from "./Hymn";
import hymnsList from "./hymnsList";
import EditModal from "./Hymn/Edit";
import QuickAddModal from "./Hymn/QuickAdd";

interface EditValues {
  name: string;
  number: number;
}

interface QuickAddValues {
  name: string;
  date: string;
}

interface HymnValues {
  name: string;
  number: number;
  logs: { logged: string; by: string }[];
}

const AllHymns = (): ReactElement => {
  const [data, setData] = useState<HymnValues>({
    name: "",
    number: 0,
    logs: [{ logged: "", by: "" }],
  });
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [quickAddModalOpen, setQuickAddModalOpen] = useState<boolean>(false);

  const openEditModal = (values: HymnValues) => {
    setEditModalOpen(true);
    setData(values);
  };
  const openQuickAddModal = (values: HymnValues) => {
    setQuickAddModalOpen(true);
    setData(values);
  };

  const editHymn = (values: EditValues) => {
    const selectedhymn = hymnsList.filter(
      (hymn) => hymn.number === data.number
    );

    selectedhymn[0].name = values.name;
    selectedhymn[0].number = values.number;
  };

  const quickAddHymn = (values: QuickAddValues) => {
    const selectedhymn = hymnsList.filter(
      (hymn) => hymn.number === data.number
    );

    selectedhymn[0].logs.push({ logged: values.date, by: values.name });
  };

  return (
    <>
      <EditModal
        open={editModalOpen}
        handleClose={() => setEditModalOpen(false)}
        data={data}
        editMutation={editHymn}
      />
      <QuickAddModal
        open={quickAddModalOpen}
        handleClose={() => setQuickAddModalOpen(false)}
        quickAddMutation={quickAddHymn}
      />
      <Box display="flex" justifyContent="center" flexDirection="column">
        {hymnsList.map((hymn) => (
          <Hymn
            name={hymn.name}
            number={hymn.number}
            logs={hymn.logs}
            handleEdit={() => openEditModal(hymn)}
            handleQuickAdd={() => openQuickAddModal(hymn)}
            key={hymn.number}
          />
        ))}
      </Box>
    </>
  );
};

export default AllHymns;
