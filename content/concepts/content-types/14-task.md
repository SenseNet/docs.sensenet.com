---
title: "Task"
metaTitle: "sensenet - Task"
metaDescription: "sensenet Task"
---

A content type for defining tasks.

# Features

A task is a simple content type holding the usual fields for a TODO item - a description, dates and a completion status. In sensenet tasks are stored in [task lists](/concepts/content-types/12-tasklist).

# Parent type

ListItem

# Content handler

`SenseNet.ContentRepository.Task`

# Special fields

| Name               | Type        | Description                        |
| ------------------ | ----------- | ---------------------------------- |
| **StartDate**      | `DateTime`  |                                    |
| **DueDate**        | `DateTime`  |                                    |
| **AssignedTo**     | `Reference` | List of internal stakeholders.     |
| **Priority**       | `Choice`    |                                    |
| **Status**         | `Choice`    |                                    |
| **TaskCompletion** | `Integer`   | Completion percentage of the task. |
| **RemainingDays**  | `Integer`   | Number of remaining days.          |
| **DueText**        | `ShortText` |                                    |
| **DueCssClass**    | `ShortText` | Css class                          |

# Example

```xml
<ContentType name="Task" parentType="ListItem" handler="SenseNet.ContentRepository.Task" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">
  <DisplayName>$Ctd-Task,DisplayName</DisplayName>
  <Description>$Ctd-Task,Description</Description>
  <Icon>FormItem</Icon>
  <Fields>
    <Field name="StartDate" type="DateTime">
      <DisplayName>$Ctd-Task,StartDate-DisplayName</DisplayName>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
      </Configuration>
    </Field>
    <Field name="DueDate" type="DateTime">
      <DisplayName>$Ctd-Task,DueDate-DisplayName</DisplayName>
      <Configuration>
        <DateTimeMode>DateAndTime</DateTimeMode>
        <Compulsory>true</Compulsory>
      </Configuration>
    </Field>
    <Field name="AssignedTo" type="Reference">
      <DisplayName>$Ctd-Task,AssignedTo-DisplayName</DisplayName>
      <Description>$Ctd-Task,AssignedTo-Description</Description>
      <Configuration>
        <AllowMultiple>true</AllowMultiple>
        <AllowedTypes>
          <Type>User</Type>
        </AllowedTypes>
        <SelectionRoot>
          <Path>/Root/IMS</Path>
          <Path>/Root</Path>
        </SelectionRoot>
      </Configuration>
    </Field>
    <Field name="Priority" type="Choice">
      <DisplayName>$Ctd-Task,Priority-DisplayName</DisplayName>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Option value="1">$Ctd-Task,Priority-1</Option>
          <Option value="2" selected="true">$Ctd-Task,Priority-2</Option>
          <Option value="3">$Ctd-Task,Priority-3</Option>
        </Options>
      </Configuration>
    </Field>
    <Field name="Status" type="Choice">
      <DisplayName>$Ctd-Task,Status-DisplayName</DisplayName>
      <Configuration>
        <AllowMultiple>false</AllowMultiple>
        <AllowExtraValue>false</AllowExtraValue>
        <Options>
          <Option value="pending">$Ctd-Task,Status-pending</Option>
          <Option value="active" selected="true">$Ctd-Task,Status-active</Option>
          <Option value="completed">$Ctd-Task,Status-completed</Option>
          <Option value="deferred">$Ctd-Task,Status-deferred</Option>
          <Option value="waiting">$Ctd-Task,Status-waiting</Option>
        </Options>
      </Configuration>
    </Field>
    <Field name="TaskCompletion" type="Integer">
      <DisplayName>$Ctd-Task,TaskCompletion-DisplayName</DisplayName>
      <Description>$Ctd-Task,TaskCompletion-Description</Description>
      <Configuration>
        <ShowAsPercentage>true</ShowAsPercentage>
        <MinValue>0</MinValue>
        <MaxValue>100</MaxValue>
      </Configuration>
    </Field>
    <Field name="RemainingDays" type="Integer">
      <DisplayName>$Ctd-Task,RemainingDays-DisplayName</DisplayName>
      <Description>$Ctd-Task,RemainingDays-Description</Description>
      <Indexing>
        <Mode>No</Mode>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
        <ReadOnly>true</ReadOnly>
      </Configuration>
    </Field>
    <Field name="DueText" type="ShortText">
      <DisplayName>$Ctd-Task,DueText-DisplayName</DisplayName>
      <Indexing>
        <Mode>No</Mode>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
    <Field name="DueCssClass" type="ShortText">
      <DisplayName>$Ctd-Task,DueCssClass-DisplayName</DisplayName>
      <Description>$Ctd-Task,DueCssClass-Description</Description>
      <Indexing>
        <Mode>No</Mode>
      </Indexing>
      <Configuration>
        <VisibleBrowse>Hide</VisibleBrowse>
        <VisibleEdit>Hide</VisibleEdit>
        <VisibleNew>Hide</VisibleNew>
      </Configuration>
    </Field>
  </Fields>
</ContentType>
```
