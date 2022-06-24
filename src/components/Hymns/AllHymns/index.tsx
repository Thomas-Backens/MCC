import React, {
  useState,
  ReactElement,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Box } from "@material-ui/core";
import Hymn from "./Hymn";
// import { hymnsList, logsList } from "./hymnsList";
import EditModal from "./Hymn/Edit";
import QuickAddModal from "./Hymn/QuickAdd";
import { mutate } from "swr"; // useSWR
import fetcher from "../../../Utils/fetcher";
// import AddHymn from "../Search/AddHymn";

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
}

interface LogValues {
  id: number;
  logged: string;
  bywho: string;
}

// interface Values {
//   name: string;
//   hymn_name: string;
//   hymn_number: number;
//   date: string;
// }

interface AllHymnsProps {
  filter: string;
  hymnData: HymnValues[];
  logData: LogValues[];
  setHymns: Dispatch<SetStateAction<HymnValues[]>>;
  setLogs: Dispatch<SetStateAction<LogValues[]>>;
}

const AllHymns: React.FC<AllHymnsProps> = ({
  filter,
  hymnData,
  logData,
  setHymns,
  setLogs,
}: AllHymnsProps): ReactElement => {
  const [data, setData] = useState<HymnValues>({
    name: "",
    number: 0,
    // logs: [{ logged: "", bywho: "" }],
  });
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [quickAddModalOpen, setQuickAddModalOpen] = useState<boolean>(false);

  // const { data: hymns } = useSWR("/api/hymn");
  // const { data: logs } = useSWR("/api/log");

  // const [allHymns, setAllHymns] = useState<HymnValues[]>(hymnsList);
  // const [allLogs, setAllLogs] = useState<LogValues[]>(logsList);

  useEffect(() => {
    fetch("/api/hymn")
      .then((response) => response.json())
      .then((hymn_data) => setHymns(hymn_data.hymns));
    fetch("/api/log")
      .then((response) => response.json())
      .then((log_data) => setLogs(log_data.logs));
  }, [setHymns, setLogs]);

  // useEffect(() => {
  //   addHymn(createMutation);
  // }, [createMutation]);

  // useEffect(() => {
  //   setAllHymns([
  //     ...allHymns.filter((hymn) => hymn.number !== addedHymn.number),
  //     addedHymn,
  //   ]);
  //   const newLog = {
  //     id: addedHymn.number,
  //     logged: addedHymn.logged,
  //     bywho: addedHymn.bywho,
  //   };
  //   setAllLogs([...allLogs.filter((log) => log.id !== newLog.id), newLog]);
  // }, [addedHymn]);

  // let dataHymns: HymnValues[] = [];
  // let dataLogs: any[] = [];

  // if (hymns) {
  //   dataHymns = hymns.hymns;
  // }

  // if (logs) {
  //   dataLogs = logs.logs;
  // }

  // useEffect(() => {
  //   fetch("/api/hymn")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const openEditModal = (values: HymnValues) => {
    setEditModalOpen(true);
    setData(values);
  };
  const openQuickAddModal = (values: HymnValues) => {
    setQuickAddModalOpen(true);
    setData(values);
  };

  // const editHymn = (values: EditValues) => {
  //   const selectedhymn = hymnsList.filter(
  //     (hymn) => hymn.number === data.number
  //   );

  //   selectedhymn[0].name = values.name;
  //   selectedhymn[0].number = values.number;
  // };

  const editHymn = (values: EditValues) => {
    mutate("/api/hymn", async () => {
      const editedHymn = await fetcher("/api/hymn", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: data.number,
          newNumber: values.number,
          newName: values.name,
        }),
      });

      let newLogs = logData.filter((log) => log.id === data.number);

      if (values.number === data.number) {
        editedHymn.number = data.number;
      } else {
        newLogs.forEach((newLog) => {
          newLog.id = values.number;
        });
      }

      editedHymn.name = values.name;
      setHymns([
        ...hymnData.filter((hymn) => hymn.number !== data.number),
        editedHymn,
      ]);
      // newLogs.forEach((newLog) => {
      //   setLogs([...logData.filter((log) => log.id !== data.number), newLog]);
      // });
      // console.log(logData.filter((log) => log.id === values.number));
      // setLogs([...logData.filter((log) => log.id !== data.number), newLogs[0]]);
      setLogs([...logData.filter((log) => log.id !== data.number)]);
    });
    setEditModalOpen(false);
  };

  const quickAddHymn = (values: QuickAddValues) => {
    mutate("/api/log", async () => {
      const addedLog = await fetcher("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data.number,
          bywho: values.name,
          logged: values.date,
        }),
      });

      setLogs([...logData, addedLog]);
    });
    // window.location.reload();

    // const selectedhymn = hymnsList.filter(
    //   (hymn) => hymn.number === data.number
    // );

    // console.log(selectedhymn);

    // selectedhymn[0].logs.push({ logged: values.date, bywho: values.name });
  };

  // const fakeHymns = hymnsList.filter(
  //   (hymn) =>
  //     hymn.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     hymn.number.toString().includes(filter)
  // );

  // console.log(allHymns);

  if (hymnData[0].number === 999 || logData[0].id === 999) {
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
        {/* <Box display="flex" justifyContent="center" flexDirection="column">
          {allHymns.map((hymn) => (
            <Hymn
              name={hymn.name}
              number={hymn.number}
              logs={allLogs.filter((log) => log.id === hymn.number)}
              handleEdit={() => openEditModal(hymn)}
              handleQuickAdd={() => openQuickAddModal(hymn)}
              key={hymn.number}
            />
          ))}
        </Box> */}
      </>
    );
  }

  const filteredHymns = hymnData.filter(
    (hymn) =>
      hymn.name.toLowerCase().includes(filter.toLowerCase()) ||
      hymn.number.toString().includes(filter)
  );

  const filteredLogs = (hymnId: number) => {
    const flogs = logData.filter((log) => log.id === hymnId);

    return flogs;
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
        {filteredHymns.sort().map((hymn) => (
          <Hymn
            name={hymn.name}
            number={hymn.number}
            logs={
              /*allLogs.filter(
                (log) => log.id === hymn.number
              )*/ filteredLogs(hymn.number)
            }
            handleEdit={() => openEditModal(hymn)}
            handleQuickAdd={() => openQuickAddModal(hymn)}
            key={hymn.number}
          />
        ))}
      </Box>
    </>
  );

  // return (
  //   <>
  //     <EditModal
  //       open={editModalOpen}
  //       handleClose={() => setEditModalOpen(false)}
  //       data={data}
  //       editMutation={editHymn}
  //     />
  //     <QuickAddModal
  //       open={quickAddModalOpen}
  //       handleClose={() => setQuickAddModalOpen(false)}
  //       quickAddMutation={quickAddHymn}
  //     />
  //     <Box display="flex" justifyContent="center" flexDirection="column">
  //       {fakeHymns.sort().map((hymn) => (
  //         <Hymn
  //           name={hymn.name}
  //           number={hymn.number}
  //           logs={hymn.logs}
  //           handleEdit={() => openEditModal(hymn)}
  //           handleQuickAdd={() => openQuickAddModal(hymn)}
  //           key={hymn.number}
  //         />
  //       ))}
  //     </Box>
  //   </>
  // );
};

export default AllHymns;
