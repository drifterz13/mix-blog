import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { MdAccessTime } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa"
import { rhythm } from "../utils/typography"
import Badge from "./Badge"

const IconContainer = styled("div")`
  display: flex;
  align-items: center;
  :nth-child(2) {
    margin: 0 ${rhythm(1)};
  }
`

const iconStyles = css`
  margin-right: 8px;
`

export default ({ date, timeToRead, tags }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: ${rhythm(1)};
      `}
    >
      <IconContainer>
        <FaRegCalendarAlt size={20} css={iconStyles} />
        <span>{date}</span>
      </IconContainer>
      <IconContainer>
        <MdAccessTime size={20} css={iconStyles} />
        <span>{`${timeToRead} นาที`}</span>
      </IconContainer>
      <div
        css={css`
          display: flex;
        `}
      >
        {tags.map((tag, idx) => (
          <Badge tag={tag} key={idx.toString()}>
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}
