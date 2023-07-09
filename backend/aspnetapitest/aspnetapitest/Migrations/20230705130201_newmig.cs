using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace aspnetapitest.Migrations
{
    /// <inheritdoc />
    public partial class newmig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PatientName",
                table: "Appointments",
                newName: "PatientLastName");

            migrationBuilder.AddColumn<string>(
                name: "PatientFirstName",
                table: "Appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PatientFirstName",
                table: "Appointments");

            migrationBuilder.RenameColumn(
                name: "PatientLastName",
                table: "Appointments",
                newName: "PatientName");
        }
    }
}
