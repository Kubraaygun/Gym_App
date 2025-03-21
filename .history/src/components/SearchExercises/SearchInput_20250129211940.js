import { Box, Button, TextField } from "@mui/material";

const SearchInput = ({ search, setSearch, handleSearch }) => (
  <Box position="relative" mb="72px">
    <TextField
      sx={{
        input: { fontWeight: "700", border: "none", borderRadius: "4px" },
        width: { lg: "800px", xs: "350px" },
        backgroundColor: "#fff",
        borderRadius: "40px",
      }}
      value={search}
      height="76px"
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Egzersiz Ara"
      type="text"
    />
    <Button
      className="search-btn"
      sx={{
        bgcolor: "#FF2625",
        color: "#fff",
        textTransform: "none",
        width: { lg: "173px", xs: "80px" },
        height: "56px",
        position: "absolute",
        right: "0px",
        fontSize: { lg: "20px", xs: "14px" },
      }}
      onClick={handleSearch}
    >
      Ara
    </Button>
  </Box>
);

export default SearchInput;
