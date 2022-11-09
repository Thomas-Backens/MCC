import React, {
  useState,
  ReactElement,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Box } from "@material-ui/core";
import Hymn from "./Hymn";
import EditModal from "./Hymn/Edit";
import PinModal from "./Hymn/Pin";
import QuickAddModal from "./Hymn/QuickAdd";
import AlertDialog from "./Hymn/Alert";
import { mutate } from "swr";
import fetcher from "../../../Utils/fetcher";
import moment from "moment";

interface EditValues {
  name: string;
  number: number;
}

interface PasswordValues {
  password: string;
}

interface QuickAddValues {
  name: string;
  date: string;
}

interface HymnValues {
  _id: number;
  name: string;
  logs: { logged: string; by: string }[];
}

interface AllHymnsProps {
  filter: string;
  hymnData: HymnValues[];
  setHymns: Dispatch<SetStateAction<HymnValues[]>>;
  sortedReversed: boolean;
}

const AllHymns: React.FC<AllHymnsProps> = ({
  filter,
  hymnData,
  setHymns,
  sortedReversed,
}: AllHymnsProps): ReactElement => {
  const [data, setData] = useState<HymnValues>({
    _id: 0,
    name: "",
    logs: [],
  });
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [pinModalOpen, setPinModalOpen] = useState<boolean>(false);
  const [quickAddModalOpen, setQuickAddModalOpen] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/hymn")
      .then((response) => response.json())
      .then((hymn_data) => setHymns(hymn_data.hymns));
  }, [setHymns]);

  const openEditModal = (values: HymnValues) => {
    setEditModalOpen(true);
    setPinModalOpen(true);
    setData(values);
  };
  const openQuickAddModal = (values: HymnValues) => {
    setQuickAddModalOpen(true);
    setPinModalOpen(true);
    setData(values);
  };

  const editHymn = (values: EditValues) => {
    mutate("/api/hymn", async () => {
      const updatedHymns = await fetcher("/api/hymn", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: data._id,
          newId: values.number,
          newName: values.name,
        }),
      });

      setHymns(updatedHymns);
    });
    setEditModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const quickAddHymn = (values: QuickAddValues) => {
    mutate("/api/hymn", async () => {
      const updatedHymns = await fetcher("/api/hymn", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: data._id,
          by: values.name,
          logged: values.date,
        }),
      });

      if (updatedHymns.length <= 0) {
        setAlertOpen(true);
      } else {
        setHymns(updatedHymns);
      }
    });
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  if (hymnData === undefined) {
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
      </>
    );
  }

  let filteredHymns = hymnData;

  if (filter === "") {
    let sortedHymns = [];
    for (let i = 0; i < hymnData.length; i++) {
      const sortedLogs = hymnData[i].logs.sort((a, b) => {
        if (moment(a.logged) < moment(b.logged)) return 1;
        if (moment(a.logged) > moment(b.logged)) return -1;
        return 0;
      });

      sortedHymns.push({
        _id: hymnData[i]._id,
        name: hymnData[i].name,
        logs: sortedLogs,
      });
    }

    if (sortedReversed) {
      sortedHymns.sort((a, b) => {
        if (moment(a.logs[0].logged) < moment(b.logs[0].logged)) return -1;
        if (moment(a.logs[0].logged) > moment(b.logs[0].logged)) return 1;
        return 0;
      });
    } else {
      sortedHymns.sort((a, b) => {
        if (moment(a.logs[0].logged) < moment(b.logs[0].logged)) return 1;
        if (moment(a.logs[0].logged) > moment(b.logs[0].logged)) return -1;
        return 0;
      });
    }

    filteredHymns = sortedHymns;
  } else {
    filteredHymns = hymnData.filter(
      (hymn) =>
        hymn.name.toLowerCase().includes(filter.toLowerCase()) ||
        hymn._id.toString().includes(filter)
    );
  }

  const checkPassword = (values: PasswordValues) => {
    setIsPasswordCorrect(values.password === "rahab" ? true : false);
    setPinModalOpen(false);
  };

  const closeEdit = () => {
    setPinModalOpen(false);
    setEditModalOpen(false);
    setIsPasswordCorrect(false);
  };
  const closeQuickAdd = () => {
    setPinModalOpen(false);
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <EditModal
        open={editModalOpen && isPasswordCorrect}
        handleClose={closeEdit}
        data={data}
        editMutation={editHymn}
      />
      <PinModal
        open={pinModalOpen}
        handleClose={() => setPinModalOpen(false)}
        isCorrect={(values) => checkPassword(values)}
      />
      <QuickAddModal
        open={quickAddModalOpen && isPasswordCorrect}
        handleClose={closeQuickAdd}
        quickAddMutation={quickAddHymn}
      />
      <AlertDialog open={alertOpen} handleClose={handleCloseAlert} />
      <Box display="flex" justifyContent="center" flexDirection="column">
        {filteredHymns.sort().map((hymn) => (
          <Hymn
            name={hymn.name}
            number={hymn._id}
            logs={hymn.logs}
            handleEdit={() => openEditModal(hymn)}
            handleQuickAdd={() => openQuickAddModal(hymn)}
            key={hymn._id}
          />
        ))}
      </Box>
    </>
  );
};

export default AllHymns;
