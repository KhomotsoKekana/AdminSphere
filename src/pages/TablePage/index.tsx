/* eslint-disable @typescript-eslint/no-inferrable-types */
import React, { useRef } from "react";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Button, Dropdown, Space, Tag } from "antd";
import { getTable } from "@services/table";

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type GithubIssueItem = {
  id: string;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  created_at: string;
  updated_at: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "Title",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
    tip: "Long titles will automatically truncate",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "This field is required",
        },
      ],
    },
  },
  {
    disable: true,
    title: "Status",
    dataIndex: "state",
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: "select",
    valueEnum: {
      open: {
        text: "Open",
        status: "Error",
      },
      closed: {
        text: "Closed",
        status: "Success",
        disabled: true,
      },
      processing: {
        text: "Processing",
        status: "Processing",
      },
    },
  },
  {
    editable: false,
    title: "Labels",
    dataIndex: "labels",
    search: false,
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: "Creation Time",
    key: "showTime",
    dataIndex: "created_at",
    valueType: "date",
    sorter: true,
    hideInSearch: true,
  },
  {
    title: "Creation Time",
    dataIndex: "created_at",
    valueType: "dateRange",
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: "Actions",
    valueType: "option",
    key: "option",
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        Edit
      </a>,
      <a key="view">View</a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: "copy", name: "Copy" },
          { key: "delete", name: "Delete" },
        ]}
      />,
    ],
  },
];

const TablePage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async () => {
        await waitTime(500);
        const res = await getTable();
        return {
          data: res.data,
          // success should return true,
          // otherwise table will stop parsing data even if there is data
          success: res.code === 200,
          // If not provided, it will use data length; for pagination you must pass it
          // total: number,
        };
      }}
      editable={{
        type: "multiple",
      }}
      rowKey="id"
      search={{
        labelWidth: "auto",
      }}
      headerTitle="Advanced Table"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          New
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: "1st item",
                key: "1",
              },
              {
                label: "2nd item",
                key: "2",
              },
              {
                label: "3rd item",
                key: "3",
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};

export default TablePage;
